const { Router } = require("express");

const renderHomePage = require("../../controllers/view/renderHomePage");
const renderLoginPage = require("../../controllers/view/renderLoginPage");

const router = Router();

router.get("/login", renderLoginPage);

router.get("/", renderHomePage);

module.exports = router;
