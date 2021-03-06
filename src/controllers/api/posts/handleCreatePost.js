const Post = require("../../../models/Post");

const handleCreatePost = async (req, res) => {
  try {
    // submit a sequelize create request to the Post table using values from the request body and session
    const newPost = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.userId,
    });
    res.json(newPost);
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to create new post" });
  }
};

module.exports = handleCreatePost;
