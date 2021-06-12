const Post = require("../../models/Post");

const handleCreatePost = (req, res) => {
  try {
    const newPost = Post.create({
      title: req.body.title,
      content: req.body.content,
      // TODO: user_id needed from session
    });
    res.json(newPost);
  } catch (error) {
    console.log(`[ERROR] - ${error.message}`);
    res.status(500).json({ error: "Failed to create new post" });
  }
};

module.exports = handleCreatePost;
