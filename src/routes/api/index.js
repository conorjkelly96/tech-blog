const { Router } = require("express");

const blogRoutes = require("./blog");
const commentRoutes = require("./comment");

const router = Router();

router.use("/blog", blogRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
