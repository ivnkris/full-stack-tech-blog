const { Post, User, Comment } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: User,
        },
        {
          model: Comment,
        },
      ],
    });

    const comments = await Comment.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: User,
        },
        {
          model: Post,
        },
      ],
    });

    const formattedPosts = posts.map((post) => post.get({ plain: true }));
    const formattedComments = comments.map((comment) =>
      comment.get({ plain: true })
    );
    const payload = {
      posts: formattedPosts,
      comments: formattedComments,
    };
    res.render("dashboard", { payload });
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to render dashboard" });
  }
};

module.exports = renderDashboard;
