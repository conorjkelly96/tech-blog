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
    return res.status(500).json({ error: `[ERR]: ${error.message}` });
  }
};

const renderCreateBlog = async (req, res) => {
  try {
    const { username } = req.session;
    res.render("create-blog", { layout: "main", username });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to render" });
  }
};
const renderEditBlog = async (req, res) => {
  try {
    console.log("edit blog");
    // const { username, userId } = req.session;
    // const { id } = req.params;
    // console.log(id);
    // const data = await Blog.findOne({ where: { id, user_id: userId } });
    // if (!data) {
    //   return res.redirect("/dashboard");
    // }
    // const blog = data.get({ plain: true });
    // res.render("edit-blog", { username, blog });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: `[ERR]: ${error.message}` });
  }
};
const renderEditComment = async (req, res) => {
  try {
    res.render("edit-comment");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: `[ERR]: ${error.message}` });
  }
};

module.exports = {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
  renderEditComment,
};
