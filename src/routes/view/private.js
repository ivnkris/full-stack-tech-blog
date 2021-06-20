const { Router } = require("express");

const renderDashboard = require("../../controllers/view/renderDashboard");
const handleLogout = require("../../controllers/view/handleLogout");
const renderEditPost = require("../../controllers/view/renderEditPost");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/dashboard/edit/:id", renderEditPost);
router.get("/logout", handleLogout);

module.exports = router;
