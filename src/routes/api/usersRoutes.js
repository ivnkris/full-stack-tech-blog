const { Router } = require("express");
const getUserById = require("../../controllers/api/users/getUserById");
const addUser = require("../../controllers/api/users/addUser");
const updateUser = require("../../controllers/api/users/updateUser");
const deleteUser = require("../../controllers/api/users/deleteUser");

const router = Router();

router.get("/:id", getUserById);
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
