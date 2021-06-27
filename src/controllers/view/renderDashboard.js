const { Post, User, Comment } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    // find all posts where the user_id is the same as the userId saved in the session
    const posts = await Post.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: User,
          exclude: ["email", "password", "first_name", "last_name"],
        },
        {
          model: Comment,
        },
      ],
    });

    // find all comments where the user_id is the same as the userId saved in the session
    const comments = await Comment.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: User,
          exclude: ["email", "password", "first_name", "last_name"],
        },
        {
          model: Post,
        },
      ],
    });

    // format posts and comments into plain JSON
    const formattedPosts = posts.map((post) => post.get({ plain: true }));
    const formattedComments = comments.map((comment) =>
      comment.get({ plain: true })
    );

    // reverse the order within the array to show latest first
    const reversedPosts = formattedPosts.reverse();
    const reversedComments = formattedComments.reverse();

    // packaged data to be sent to handlebars
    const payload = {
      posts: reversedPosts,
      comments: reversedComments,
      user_id: req.session.userId,
    };
    res.render("dashboard", { payload });
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to render dashboard" });
  }
};

module.exports = renderDashboard;
