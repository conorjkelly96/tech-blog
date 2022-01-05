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
    res.render("homepage");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Homepage`);
  }
};

const renderBlog = async (req, res) => {
  try {
    res.render("blog");
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
