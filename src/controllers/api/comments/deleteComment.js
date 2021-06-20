const { Comment } = require("../../../models");

const deleteComment = async (req, res) => {
  try {
    const commentToBeDeleted = await Comment.destroy({
      where: {
        id: +req.params.id,
      },
    });

    return res.json(commentToBeDeleted);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to delete Comment" });
  }
};

module.exports = deleteComment;
