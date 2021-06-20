const { User } = require("../../../models");

const deleteUser = async (req, res) => {
  try {
    const userToBeDeleted = await User.destroy({
      where: {
        id: +req.params.id,
      },
    });

    return res.json(userToBeDeleted);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to delete User" });
  }
};

module.exports = deleteUser;
