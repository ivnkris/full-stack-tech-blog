const { Router } = require("express");

const renderHomePage = require("../../controllers/view/renderHomePage");
const renderLoginPage = require("../../controllers/view/renderLoginPage");
const renderDashboard = require("../../controllers/view/renderDashboard");

const router = Router();

router.get("/login", renderLoginPage);
router.get("/dashboard", renderDashboard);

router.get("/", renderHomePage);

module.exports = router;
