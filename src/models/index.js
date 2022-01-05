// import models
const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

// Blog belongsTo User
Blog.belongsTo(User, {
  foreignKey: "user_id",
});

// User hasMany Blog
User.hasMany(Blog, {
  foreignKey: "user_id",
});

// Comment belongsTo Blog
Comment.belongsTo(Blog, {
  foreignKey: "blog_id",
});

// Blog hasMany Comment
Blog.hasMany(Comment, {
  foreignKey: "blog_id",
});

// Comment belongsTo User
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// User hasMany Comment
User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = {
  User,
  Blog,
  Comment,
};
