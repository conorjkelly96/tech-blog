const { Comment } = require("../../src/models");

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
