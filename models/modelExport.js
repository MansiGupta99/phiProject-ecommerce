const Sequelize = require("sequelize");
const sequelize = require("../models/config");
const dbConfig = require("../dbConfig/primarySQL");

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

const users = require("../models/users");
database.user = users(sequelize, Sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
  database
};
