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
const getBlogsById = async (req, res) => {};

// CREATE blog post
const createBlog = async (req, res) => {};

// UPDATE blog post
const updateBlogById = async (req, res) => {};

// DELETE blog post
const deleteBlogById = async (req, res) => {};

module.exports = {
  getAllBlogs,
  getBlogsById,
  createBlog,
  updateBlogById,
  deleteBlogById,
};
