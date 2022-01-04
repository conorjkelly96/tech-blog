const { Blog } = require("../../src/models");

const blogData = [
  {
    title: "Is software engineering dead?",
    content:
      "Software engineering is no more a dead end career than civil engineering, chemical engineering or any other type of ENGINEERING. Coding is a dead end career. Programming is a dead end career.",
    user_id: 1,
  },
  {
    title: "Creating Apple's Website with Bootstrap 4",
    content:
      "Apple's home page is an example for a lightweight and modern design that looks good on any screen size. In this lesson we will recreate it using our powerful web design tool - Bootstrap Studio.",
    user_id: 2,
  },
  {
    title: "Sequelize relationships — Ultimate guide",
    content:
      "A few weeks ago I started developing web applications with Node.JS and Express. This framework if you can call it that and very disconcerting at first, especially for a developer like me who has been studying with Ruby on Rails. But after several weeks of use, I realized that Node.JS is Express are wonderful.",
    user_id: 3,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
