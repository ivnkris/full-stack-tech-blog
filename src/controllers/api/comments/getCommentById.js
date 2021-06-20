const { Comment, User, Post } = require("../../../models");

const getCommentById = async (req, res) => {
  try {
    const singleCommentData = await Comment.findByPk(req.params.id, {
      include: [{ model: User }, { model: Post }],
    });

    return res.status(200).json(singleCommentData);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get Comment." });
  }
};

module.exports = getCommentById;
