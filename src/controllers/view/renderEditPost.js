const { Post } = require("../../models");

const renderEditPost = async (req, res) => {
  // get the post id
  const { id } = req.params;
  // get the user id
  const { userId } = req.session;

  const data = await Post.findOne({ where: { id, user_id: userId } });

  if (!data) {
    // if no data found redirect to the dashboard
    return res.redirect("/dashboard");
  }

  const post = data.get({ plain: true });
  res.render("editPost", post);
};

module.exports = renderEditPost;
