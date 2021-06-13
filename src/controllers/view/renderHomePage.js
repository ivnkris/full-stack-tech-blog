const { Post, User } = require("../../models");

const renderHomePage = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
        },
      ],
    });

    const formattedPosts = posts.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts: formattedPosts });
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to render homepage" });
  }
};

module.exports = renderHomePage;
