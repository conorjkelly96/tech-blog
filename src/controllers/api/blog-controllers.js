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

    if (!userId) {
      return res.status(404).json({ error: "User is not logged in" });
    }

    if (blogTitle && blogContent && userId) {
      await Blog.create({
        title: blogTitle,
        content: blogContent,
        user_id: userId,
      });
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
    const { title, content } = req.body;

    const blog = { title, content };

    console.log(blog);

    if (!title || !content) {
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
    const { id } = req.params;

    console.log("POST ID", id);

    await Blog.destroy({
      where: {
        id,
        userId: req.session.user.id,
      },
    });

    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete blog | ${error.message}`);
    return res.status(500).json({ success: false });
  }
};

module.exports = {
  getAllBlogs,
  getBlogsById,
  createBlog,
  updateBlogById,
  deleteBlogById,
};
