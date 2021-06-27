const { Comment } = require("../../models");

const renderEditComment = async (req, res) => {
  // get comment id
  const { id } = req.params;
  // get user id
  const { userId } = req.session;

  const data = await Comment.findOne({ where: { id, user_id: userId } });

  if (!data) {
    // if no input found redirect to dashboard
    return res.redirect("/dashboard");
  }

  const comment = data.get({ plain: true });
  res.render("editComment", comment);
};

module.exports = renderEditComment;
