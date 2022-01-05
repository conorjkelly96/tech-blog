const { Blog, Comment, User } = require("../../models");

const renderDashboard = async (req, res) => {
  try {
    const { userId, firstName, lastName } = req.session;

    const postData = await Blog.findAll({
      where: { user_id: userId },
      include: [{ model: User }, { model: Comment }],
    });

    const blogs = blogData.map((blog) => {
      const newBlog = blog.get({ plain: true });

      return newBlog;
    });

    return res.render("dashboard", {
      layout: "dashboard",
      firstName,
      lastName,
      blogs,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Dashboard`);
  }
};

const renderCreateBlog = (req, res) => {
  try {
    const { firstName } = req.session;
    res.render("create-blog", { layout: "dashboard", firstName });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Dashboard`);
  }
};

const renderEditBlog = async (req, res) => {
  try {
    const { firstName, userId } = req.session;
    const { id } = req.params;

    const data = await Blog.findOne({ where: { id, user_id: userId } });

    if (!data) {
      return res.redirect("/dashboard");
    }

    const blog = data.get({ plain: true });

    res.render("edit-post", { layout: "dashboard", firstName, blog });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Dashboard`);
  }
};

const renderEditComment = async (req, res) => {
  try {
    const { firstName, userId } = req.session;
    const { id } = req.params;

    const data = await Comment.findOne({ where: { id, user_id: userId } });

    if (!data) {
      return res.redirect("/");
    }

    const comment = data.get({ plain: true });

    res.render("edit-comment", { layout: "main", firstName, comment });
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json(`ERR: ${error.message} - failed to render Dashboard`);
  }
};

module.exports = {
  renderDashboard,
  renderCreateBlog,
  renderEditBlog,
  renderEditComment,
};
