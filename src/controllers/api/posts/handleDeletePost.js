const { Post } = require("../../../models");

const handleDeletePost = async (req, res) => {
  try {
    // submit a sequelize destroy request on the Post table
    const postToBeDeleted = await Post.destroy({
      where: {
        id: +req.params.id,
      },
    });

    return res.json(postToBeDeleted);
  } catch (error) {
    return res.status(500).json({
      error: `Failed to delete Post with id of [${req.params.id}]`,
    });
  }
};

module.exports = handleDeletePost;
