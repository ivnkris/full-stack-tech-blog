const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const hooks = require("../hooks");
const sequelize = require("../config/connection");

const options = {
  hooks,
  sequelize,
  modelName: "user",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class User extends Model {
  async isValidPassword(password) {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid;
  }
}

User.init(schema, options);

module.exports = User;
