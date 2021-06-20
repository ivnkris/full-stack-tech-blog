const { Post } = require("../../../models");

const updatePost = async (req, res) => {
  try {
    const postToBeUpdated = await Post.update(req.body, {
      where: {
        id: +req.params.id,
      },
    });
    return res.status(200).json(postToBeUpdated);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to update Post" });
  }
};

module.exports = updatePost;
