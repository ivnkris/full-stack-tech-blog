const { Router } = require("express");

const view = require("./view");
const api = require("./api");
const auth = require("./auth");

const router = Router();

router.use("/auth", auth);
router.use("/api", api);
router.use("/", view);

module.exports = router;
