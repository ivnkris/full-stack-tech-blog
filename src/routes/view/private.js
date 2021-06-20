const { Router } = require("express");

const renderDashboard = require("../../controllers/view/renderDashboard");
const handleLogout = require("../../controllers/view/handleLogout");
const renderEditPost = require("../../controllers/view/renderEditPost");
const renderEditComment = require("../../controllers/view/renderEditComment");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/dashboard/edit/:id", renderEditPost);
router.get("/dashboard/edit-comment/:id", renderEditComment);
router.get("/logout", handleLogout);

module.exports = router;
