const { Blog, Comment, User } = require("../../models");

const renderSignUp = (req, res) => {
  try {
    res.render("sign-up");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Sign Up`);
  }
};

const renderLogin = (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Log In`);
  }
};

const renderHomepage = async (req, res) => {
  try {
    const { isLoggedIn } = req.session;
    const blogData = await Blog.findAll({
      include: [{ model: User }, { model: Comment }],
    });
    const blogs = blogData.map((blog) => {});

    res.render("homepage", { isLoggedIn, blogs });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Homepage`);
  }
};

const renderBlog = async (req, res) => {
  try {
    const { isLoggedIn, username } = req.session;

    const { id } = req.params;

    const blogData = await Blog.findOne({
      where: { id },
      include: [{ model: User }, { model: Comment, include: User }],
    });

    const blogObj = blogData.get({ plain: true });

    res.render("blog", { isLoggedIn, username, blogObj });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Blog Post`);
  }
};
module.exports = {
  renderSignUp,
  renderLogin,
  renderHomepage,
  renderBlog,
};
