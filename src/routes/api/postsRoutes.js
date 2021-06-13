const { Router } = require("express");

const handleCreatePost = require("../../controllers/api/handleCreatePost");
const handleDeletePost = require("../../controllers/api/handleDeletePost");
const handlePostComment = require("../../controllers/api/handlePostComment");

const router = Router();

router.delete("/:id", handleDeletePost);
router.post("/:id/comments", handlePostComment);

router.post("/", handleCreatePost);

module.exports = router;
