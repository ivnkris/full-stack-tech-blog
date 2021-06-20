const { Router } = require("express");
const {
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} = require("../../controllers/api/users");

const router = Router();

router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
