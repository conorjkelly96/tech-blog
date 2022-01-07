const { Blog, Comment, User } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    const { userId, email } = req.session;

    const blogData = await Blog.findAll({
      where: { user_id: userId },
      include: [{ model: User }, { model: Comment }],
    });

    const blogs = blogData.map((blog) => {
      const newBlog = blog.get({ plain: true });

      return newBlog;
    });

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
    console.log(req.session);
    const { username } = req.session;
    res.render("create-blog", { username });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
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
