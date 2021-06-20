const { Comment } = require("../../models");

const renderEditComment = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;

  const data = await Comment.findOne({ where: { id, user_id: userId } });

  if (!data) {
    return res.redirect("/dashboard");
  }

  const comment = data.get({ plain: true });
  res.render("editComment", comment);
};

module.exports = renderEditComment;
