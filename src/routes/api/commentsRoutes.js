const { Router } = require("express");
const getAllComments = require("../../controllers/api/comments/getAllComments");
const getCommentById = require("../../controllers/api/comments/getCommentById");
const addComment = require("../../controllers/api/comments/addComment");
const updateComment = require("../../controllers/api/comments/updateComment");
const deleteComment = require("../../controllers/api/comments/deleteComment");

const router = Router();

router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.post("/", addComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
