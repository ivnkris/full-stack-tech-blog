const { User, Post, Comment } = require("../../../models");

const getUserById = async (req, res) => {
  try {
    const singleUserData = await User.findByPk(req.params.id, {
      include: [{ model: Post }, { model: Comment }],
    });

    return res.status(200).json(singleUserData);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get User." });
  }
};

module.exports = getUserById;
