const { User } = require("../../src/models");

const userData = [
  {
    email: "frodobaggins@theshire.com",
    password: "Golumn123!",
    username: "LittleHobbit123",
  },
  {
    email: "codewarrior@gmail.com",
    password: "Swiftisterrible123!",
    username: "PythonSucks_666",
  },
  {
    email: "nodetillidie@hotmail.com",
    password: "BackendDev123!",
    username: "CameHereForTheFries",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
