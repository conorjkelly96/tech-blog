const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Comment extends Model {}

Comment.init(
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
    modelName: "comment",
  }
);

module.exports = Comment;
