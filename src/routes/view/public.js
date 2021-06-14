const { Router } = require("express");

const renderHomePage = require("../../controllers/view/renderHomePage");
const renderLoginPage = require("../../controllers/view/renderLoginPage");
const renderPost = require("../../controllers/view/renderPost");

const router = Router();

router.get("/login", renderLoginPage);
router.get("/posts/:id", renderPost);
router.get("/", renderHomePage);

module.exports = router;
