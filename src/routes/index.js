const { Router } = require("express");

const view = require("./view");
const api = require("./api");

const router = Router();

router.use("/", view);
router.use("/api", api);

module.exports = router;
