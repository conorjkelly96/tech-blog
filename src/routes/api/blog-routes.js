const { Router } = require("express");
const {
  getAllBlogs,
  getBlogsById,
  createBlog,
  updateBlogById,
  deleteBlogById,
} = require("../../controllers/api/blog-controllers");

const router = Router();

// READ all blog posts
router.get("/", getAllBlogs);

// READ blog post by ID
router.get("/:id", getBlogsById);

// CREATE blog post
router.post("/", createBlog);

// UPDATE blog post
router.put("/:id", updateBlogById);

// DELETE blog post
router.delete("/:id", deleteBlogById);

module.exports = router;
