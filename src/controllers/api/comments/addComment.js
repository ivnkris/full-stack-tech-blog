const { Comment } = require("../../../models");

const addComment = async (req, res) => {
  try {
    // get the parameters from the request body and session
    const parameters = {
      message: req.body.message,
      post_id: req.body.post_id,
      user_id: req.session.userId,
    };
    // submit a sequelize create request to the Comment table
    const newComment = await Comment.create(parameters);

    return res.status(200).json(newComment);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to add Comment" });
  }
};

module.exports = addComment;
