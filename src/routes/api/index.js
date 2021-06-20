const { Router } = require("express");

const postsRoutes = require("./postsRoutes");
const commentsRoutes = require("./commentsRoutes");

const router = Router();

router.use("/posts", postsRoutes);
router.use("/comments", commentsRoutes);

module.exports = router;
