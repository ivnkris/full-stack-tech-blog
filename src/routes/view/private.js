const { Router } = require("express");

const renderDashboard = require("../../controllers/view/renderDashboard");
const handleLogout = require("../../controllers/view/handleLogout");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/logout", handleLogout);

module.exports = router;
