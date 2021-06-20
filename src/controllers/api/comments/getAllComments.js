const { Comment, User, Post } = require("../../../models");

const getAllComments = async (req, res) => {
  try {
    const allCommentsData = await Comment.findAll({
      include: [{ model: User }, { model: Post }],
    });

    return res.status(200).json(allCommentsData);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get Comments." });
  }
};

module.exports = getAllComments;
