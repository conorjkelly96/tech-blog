const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Blog extends Model {}

Blog.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "blog",
  }
);

module.exports = Blog;
