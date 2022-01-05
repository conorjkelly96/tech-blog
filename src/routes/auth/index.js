const { Router } = require("express");

const privateRoutes = require("./privateRoutes");

const router = Router();

router.use(privateRoutes);

module.exports = router;
