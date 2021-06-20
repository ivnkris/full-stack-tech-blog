const { Comment } = require("../../../models");

const addComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);

    return res.status(200).json(newComment);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to add Comment" });
  }
};

module.exports = addComment;
