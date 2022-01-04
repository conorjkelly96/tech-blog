const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection.js");
const hashPassword = require("../hooks/hooks");

class Blog extends Model {}

module.exports = Blog;
