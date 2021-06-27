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
    if (posts) {
      const formattedPosts = posts.map((post) => post.get({ plain: true }));
      if (req.session.isLoggedIn) {
        formattedPosts.isLoggedIn = true;
        formattedPosts.user_id = req.session.userId;
      } else {
        formattedPosts.isLoggedIn = false;
      }
      const reversedPosts = formattedPosts.reverse();
      reversedPosts.isEmpty = false;
    } else {
      const formattedPosts = {};
      if (req.session.isLoggedIn) {
        formattedPosts.isLoggedIn = true;
        formattedPosts.user_id = req.session.userId;
      } else {
        formattedPosts.isLoggedIn = false;
      }
      const reversedPosts = formattedPosts;
      reversedPosts.isEmpty = true;
    }
    res.render("homepage", { posts: reversedPosts });
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to render homepage" });
  }
};

module.exports = renderHomePage;
