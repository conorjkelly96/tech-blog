const bcrypt = require("bcrypt");
const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");
const hashPassword = require("../hooks/hooks");

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8],
      is: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
    },
  },
};

const options = {
  sequelize: connection,
  timestamps: true,
  freezeTableNames: true,
  underscored: true,
  modelName: "user",
  hooks: {
    beforeCreate: hashPassword,
  },
};

class User extends Model {
  async checkPassword(userPassword) {
    const isValid = await bcrypt.compare(userPassword, this.password);
    return isValid;
  }
}

User.init(schema, options);

module.exports = User;
