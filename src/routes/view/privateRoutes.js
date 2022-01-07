const { Router } = require("express");

const {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
  renderEditComment,
} = require("../../controllers/view/privateController");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/dashboard/create-blog", renderCreateBlog);
router.get("/dashboard/edit-blog/:id", renderEditBlog);
router.get("/comment/edit-comment/:id", renderEditComment);

module.exports = router;
