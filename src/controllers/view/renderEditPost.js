const { Post } = require("../../models");

const renderEditPost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.session;

  const data = await Post.findOne({ where: { id, user_id: userId } });

  if (!data) {
    return res.redirect("/dashboard");
  }

  const post = data.get({ plain: true });
  res.render("editPost", post);
};

module.exports = renderEditPost;
