const session = require("express-session");
const { Post, User } = require("../../models");

const renderHomePage = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          exclude: ["email", "password", "first_name", "last_name"],
        },
      ],
    });

    const formattedPosts = posts.map((post) => post.get({ plain: true }));
    if (req.session.isLoggedIn) {
      formattedPosts.isLoggedIn = true;
    } else {
      formattedPosts.isLoggedIn = false;
    }
    const reversedPosts = formattedPosts.reverse();
    res.render("homepage", { posts: reversedPosts });
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to render homepage" });
  }
};

module.exports = renderHomePage;
