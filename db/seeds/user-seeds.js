const { User } = require("../../src/models");

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
