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
    const { blogTitle, blogContent } = req.body;
    const { userId } = req.session;

    console.log(blogTitle, blogContent, userId);

    if (!userId) {
      return res.status(404).json({ error: "User is not logged in" });
    }

    if (blog) {
      await Blog.create({ blogTitle, blogContent, userId: user_id });
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
    const { id } = req.params;
    const { blogTitle, blogContent } = req.body;

    const blog = { blogTitle, blogContent };

    if (!blogTitle || !blogContent) {
      return res.status(404).json({ error: "Unable to update post" });
    }

    const [updatedPost] = await Blog.update(blog, { where: { id } });

    if (!updatedPost) {
      return res.status(404).json({ error: "Post does not exist" });
    }

    res.status(200).json({ success: "Successfully updated blog." });
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    res.status(500).json({
      error: "Failed to update blog.",
    });
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
