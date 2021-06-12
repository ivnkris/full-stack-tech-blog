const { Router } = require("express");

const renderHomePage = require("../../controllers/view/renderHomePage");

const router = Router();

router.get("/", renderHomePage);

module.exports = router;
