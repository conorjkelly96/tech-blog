const { Comment } = require("../../src/models");

const commentData = [
  {
    text: "Lol are you serious, obviously not.",
    blog_id: 1,
    user_id: 3,
  },
  {
    text: "Nice, I knew Apple's website was too cheap to make haha",
    blog_id: 2,
    user_id: 1,
  },
  {
    text: "Sequelize is legit the worst ORM lol. I much prefer writing SQL raw rather than using that jank framework",
    blog_id: 3,
    user_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
