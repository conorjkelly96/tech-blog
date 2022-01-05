const { logError } = require("../../helpers/utils");
const { Blog, Comment } = require("../../models");

// READ all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const data = await Blog.findAll({
      include: [
        {
          model: Comment,
        },
      ],
    });

    return res.json({ success: true, data });
  } catch (error) {
    logError("GET Blogs".error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

// READ blog post by ID
const getBlogsById = async (req, res) => {
  try {
    const data = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
        },
      ],
    });

    return res.json({ success: true, data });
  } catch (error) {
    logError("GET Blogs".error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

// CREATE blog post
const createBlog = async (req, res) => {
  try {
    const { blog } = req.body;

    if (blog) {
      await Blog.create({ title, content, user_id });
      return res.json({ success: true, data: "Created Blog" });
    }

    return res
      .status(400)
      .json({ success: false, error: "Please provide the required fields" });
  } catch (error) {
    console.log("POST category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

// UPDATE blog post
const updateBlogById = async (req, res) => {
  try {
    const { blog } = req.body;

    const { id } = req.params;

    if (id && blog) {
      await Blog.update({ blog: blog }, { where: { id: id } });
      return res.json({ success: true, data: `Updated Blog ${id}` });
    }
  } catch (error) {
    logError("GET Blog", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

// DELETE blog post
const deleteBlogById = async (req, res) => {
  try {
    await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Deleted Blog" });
  } catch (error) {
    logError("DELETE Blog", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllBlogs,
  getBlogsById,
  createBlog,
  updateBlogById,
  deleteBlogById,
};
