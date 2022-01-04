const connection = require("../../src/config/connection");

const seedBlogs = require("./blog-seeds");
const seedComments = require("./comment-seeds");
const seedUsers = require("./user-seeds");

const seedAll = async () => {
  await connection.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedBlogs();
  console.log("\n----- BLOGS SEEDED -----\n");

  await seedComments();
  console.log("\n----- COMMENTS SEEDED -----\n");

  process.exit(0);
};

seedAll();
