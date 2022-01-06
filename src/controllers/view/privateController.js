const { Blog, Comment, User } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    const { user, email } = req.session;

    const blogData = await Blog.findAll({
      where: { user_id: user.id },
      include: [{ model: User }, { model: Comment }],
    });

    const blogs = blogData.map((blog) => {
      const newBlog = blog.get({ plain: true });

      return newBlog;
    });

    console.log(blogs[0].title);

    return res.render("dashboard", {
      layout: "main",
      email,
      blogs,
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
