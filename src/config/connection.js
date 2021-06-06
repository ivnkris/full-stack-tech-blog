const Sequelize = require("sequelize");
require("dotenv").config();

const dbOptions = {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
  logging: false,
};

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const connection = new Sequelize(dbName, dbUser, dbPassword, dbOptions);

module.exports = connection;
