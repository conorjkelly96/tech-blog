const { Blog } = require("../../src/models");

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
