const { Router } = require("express");

const {
  renderSignUp,
  renderLogin,
  renderHomepage,
  renderBlog,
} = require("../../controllers/view/publicController");

const router = Router();

router.get("/sign-up", renderSignUp);
router.get("/login", renderLogin);
router.get("/homepage", renderHomepage);
router.get("/blog", renderBlog);

module.exports = router;
