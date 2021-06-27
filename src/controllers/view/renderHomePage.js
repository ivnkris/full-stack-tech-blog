const session = require("express-session");
const { Post, User } = require("../../models");

const renderHomePage = async (req, res) => {
  try {
    // find all posts and include the User table
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          exclude: ["email", "password", "first_name", "last_name"],
        },
      ],
    });
    // format posts to plain JSON
    const formattedPosts = posts.map((post) => post.get({ plain: true }));
    // add isEmpty attribute to object and set value based on number of posts
    if (formattedPosts.length > 0) {
      formattedPosts.isEmpty = false;
    } else {
      formattedPosts.isEmpty = true;
    }
    // check if user is logged in and add logged in data to object
    if (req.session.isLoggedIn) {
      formattedPosts.isLoggedIn = true;
      formattedPosts.user_id = req.session.userId;
    } else {
      formattedPosts.isLoggedIn = false;
    }
    // reverse order of posts so that latest renders first
    const reversedPosts = formattedPosts.reverse();
    res.render("homepage", { posts: reversedPosts });
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to render homepage" });
  }
};

module.exports = renderHomePage;
