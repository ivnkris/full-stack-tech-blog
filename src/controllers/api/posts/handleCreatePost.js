const Post = require("../../../models/Post");

const handleCreatePost = async (req, res) => {
  try {
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
