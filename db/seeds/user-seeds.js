const { User } = require("../../src/models");

const userData = [
  {
    email: "frodobaggins@theshire.com",
    password: "Golumn123!",
  },
  {
    email: "codewarrior@gmail.com",
    password: "Swiftisterrible123!",
  },
  {
    email: "nodetillidie@hotmail.com",
    password: "BackendDev123!",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
