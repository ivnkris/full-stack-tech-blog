const { Post, User, Comment } = require("../../models");

const renderPost = async (req, res) => {
  try {
    // find post with id from url
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
          exclude: ["email", "password", "first_name", "last_name"],
        },
        {
          model: Comment,
          include: {
            model: User,
            exclude: ["email", "password", "first_name", "last_name"],
          },
        },
      ],
    });

    // format data into plain JSON
    const formattedPost = post.get({ plain: true });
    // get logged in data from session
    if (req.session.isLoggedIn) {
      formattedPost.isLoggedIn = true;
    } else {
      formattedPost.isLoggedIn = false;
    }
    // add data to session to manage handlebars logic to render partial for single post
    formattedPost.isSinglePost = true;
    res.render("singlePost", { post: formattedPost });
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to render blog post" });
  }
};

module.exports = renderPost;
