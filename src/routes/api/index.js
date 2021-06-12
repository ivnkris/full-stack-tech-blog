const { Router } = require("express");

const postsRoutes = require("./postsRoutes");

const router = Router();

router.use("/posts", postsRoutes);

module.exports = router;
