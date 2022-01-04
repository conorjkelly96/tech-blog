const { logError } = require("../../helpers/utils");
const { Blog, Comment } = require("../../models");

// READ all comment posts
const getAllComments = async (req, res) => {
  console.log(req);
};

// READ comment post by ID
const getCommentById = async (req, res) => {};

// CREATE comment post
const createComment = async (req, res) => {};

// UPDATE comment post
const updateCommentById = async (req, res) => {};

// DELETE comment post
const deleteCommentById = async (req, res) => {};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateCommentById,
  deleteCommentById,
};
