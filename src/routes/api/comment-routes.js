const { Router } = require("express");

const {
  getAllComments,
  getCommentById,
  createComment,
  updateCommentById,
  deleteCommentById,
} = require("../../controllers/api/comment-controller");

const router = Router();

// READ all comment posts
router.get("/", getAllComments);

// READ comment post by ID
router.get("/:id", getCommentById);

// CREATE comment post
router.post("/", createComment);

// UPDATE comment post
router.put("/:id", updateCommentById);

// DELETE comment post
router.delete("/:id", deleteCommentById);

module.exports = router;
