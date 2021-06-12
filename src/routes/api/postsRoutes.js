const { Router } = require("express");

const handlePostComment = require("../../controllers/api/handlePostComment");

const router = Router();

router.post("/:id/comments", handlePostComment);

module.exports = router;
