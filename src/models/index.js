// import models
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// Blog belongsTo User
Blog.belongsTo(User);

// User hasMany Blog
User.hasMany(Blog);

// Comment belongsTo Blog
Comment.belongsTo(Blog);

// Blog hasMany Comment
Blog.hasMany(Comment);

// Comment belongsTo User
Comment.belongsTo(User);

// User hasMany Comment
User.hasMany(Comment);

module.exports = {
  User,
  Blog,
  Comment,
};
