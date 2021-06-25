require("dotenv").config();
const Sequelize = require("sequelize");

const dbOptions = {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
  logging: false,
};

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

let connection;
if (process.env.JAWSDB_URL) {
  // connection for heroku
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  // connection for local development
  connection = new Sequelize(dbName, dbUser, dbPassword, dbOptions);
}

module.exports = connection;
