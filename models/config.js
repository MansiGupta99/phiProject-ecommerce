const Sequelize = require("sequelize");
const dbConfig = require("../dbConfig/primarySQL");
module.exports = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});