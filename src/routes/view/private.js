const { Router } = require("express");

const renderDashboard = require("../../controllers/view/renderDashboard");

const router = Router();

router.get("/dashboard", renderDashboard);

module.exports = router;
