const { Blog, Comment, User } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    // const { user_id } = req.session;
    // console.log("Line 6", req.session);
    // console.log("Line 7:", user_id);

    // const blogData = await Blog.findAll({
    //   where: { user_id: user_id },
    //   include: [{ model: User }, { model: Comment }],
    // });

    // const blogs = blogData.map((blog) => {
    //   const newBlog = blog.get({ plain: true });

    //   return newBlog;
    // });

    return res.render("dashboard", {
      // firstName,
      // lastName,
      // posts,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to render" });
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
