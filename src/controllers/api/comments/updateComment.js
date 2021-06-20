const { Comment } = require("../../../models");

const updateComment = async (req, res) => {
  try {
    const commentToBeUpdated = await Comment.update(req.body, {
      where: {
        id: +req.params.id,
      },
    });
    return res.status(200).json(commentToBeUpdated);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to update Comment" });
  }
};

module.exports = updateComment;
