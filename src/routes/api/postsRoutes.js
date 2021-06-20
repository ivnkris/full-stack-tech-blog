const { Router } = require("express");

const handleCreatePost = require("../../controllers/api/handleCreatePost");
const handleDeletePost = require("../../controllers/api/posts/handleDeletePost");
const updatePost = require("../../controllers/api/posts/updatePost");

const router = Router();

router.delete("/:id", handleDeletePost);
router.post("/", handleCreatePost);
router.put("/:id", updatePost);

module.exports = router;
