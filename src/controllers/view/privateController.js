const { Blog, Comment, User } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    res.render("dashboard");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Dashboard`);
  }
};

const renderCreateBlog = async (req, res) => {
  try {
    return res.render("create-blog");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Create Blog`);
  }
};
const renderEditBlog = (req, res) => {
  try {
    res.render("edit-blog");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Edit Blog`);
  }
};
const renderEditComment = (req, res) => {
  try {
    res.render("edit-comment");
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Edit Comment`);
  }
};

module.exports = {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
  renderEditComment,
};
