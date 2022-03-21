const { logError } = require("../../helpers/utils");
const { Blog, Comment } = require("../../models");

// READ all comment posts
const getAllComments = async (req, res) => {
  try {
    const data = await Comment.findAll({
      include: [
        {
          model: Blog,
        },
      ],
    });

    if (data) {
      return res.json({ success: true, data });
    }

    return res
      .status(404)
      .json({ success: false, error: "Comment does not exist" });
  } catch (error) {
    logError("GET Comment", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

// READ comment post by ID
const getCommentById = async (req, res) => {
  try {
    const data = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: Blog,
        },
      ],
    });

    if (data) {
      return res.json({ success: true, data });
    }

    return res
      .status(404)
      .json({ success: false, error: "Comment does not exist" });
  } catch (error) {
    logError("GET Comment", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

// CREATE comment post
const createComment = async (req, res) => {
  // create a new category
  try {
    const { comment, blogId } = req.body;

    const { userId } = req.session;

    if (comment) {
      await Comment.create({
        user_id: userId,
        text: comment,
        blog_id: blogId,
      });
      return res.json({ success: true, data: "Comment Category" });
    }

    return res
      .status(400)
      .json({ success: false, error: "Please provide the required fields" });
  } catch (error) {
    console.log("POST Comment", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

// UPDATE comment post
const updateCommentById = async (req, res) => {
  try {
    const { comment } = req.body;

    const { id } = req.params;

    if (id && comment) {
      await Comment.update({ comment: comment }, { where: { id: id } });
      return res.json({ success: true, data: "Updated Comment" });
    }
  } catch (error) {
    logError("GET Comment", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

// DELETE comment post
const deleteCommentById = async (req, res) => {
  try {
    await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ success: true, data: "Deleted Comment" });
  } catch (error) {
    logError("DELETE Comment", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateCommentById,
  deleteCommentById,
};
