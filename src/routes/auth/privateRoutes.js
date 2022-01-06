const { Router } = require("express");
const { signup, login } = require("../../controllers/auth/auth");

const {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
  renderEditComment,
} = require("../../controllers/view/privateController");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/create-blog", renderCreateBlog);
router.get("/edit-post", renderEditBlog);
router.get("/edit-comment", renderEditComment);

router.post("/sign-up", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
