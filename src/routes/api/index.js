const { Router } = require("express");

const postsRoutes = require("./postsRoutes");
const commentsRoutes = require("./commentsRoutes");
const usersRoutes = require("./usersRoutes");

const router = Router();

router.use("/posts", postsRoutes);
router.use("/comments", commentsRoutes);
router.use("/users", usersRoutes);

module.exports = router;
