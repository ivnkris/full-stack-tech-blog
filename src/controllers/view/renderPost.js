const { Post, User, Comment } = require("../../models");

const renderPost = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
        },
        {
          model: Comment,
          include: {
            model: User,
          },
        },
      ],
    });

    const formattedPost = post.get({ plain: true });
    formattedPost.isSinglePost = true;
    res.render("singlePost", { post: formattedPost });
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to render blog post" });
  }
};

module.exports = renderPost;
