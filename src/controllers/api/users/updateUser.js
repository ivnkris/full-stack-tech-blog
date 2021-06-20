const { User } = require("../../../models");

const updateUser = async (req, res) => {
  try {
    const userToBeUpdated = await User.update(req.body, {
      where: {
        id: +req.params.id,
      },
    });

    return res.status(200).json(userToBeUpdated);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to update User" });
  }
};

module.exports = updateUser;
