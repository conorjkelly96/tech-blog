const { Router } = require("express");
const { signup, login, logout } = require("../../controllers/auth/auth");

const {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
  renderEditComment,
} = require("../../controllers/view/privateController");
const { auth } = require("../../helpers/utils");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/create-blog", auth, renderCreateBlog);
router.get("/edit-post", auth, renderEditBlog);
router.get("/edit-comment", auth, renderEditComment);

router.post("/sign-up", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
