const { Router } = require("express");
const {
  getAllComments,
  getCommentById,
  addComment,
  updateComment,
  deleteComment,
} = require("../../controllers/api/comments");

const router = Router();

router.get("/", getAllComments);
router.get("/:id", getCommentById);
router.post("/", addComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

module.exports = router;
