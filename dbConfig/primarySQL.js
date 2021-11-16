require("dotenv/config");
module.exports = {
    HOST: "localhost",
    database: "ecommerce",
    PASSWORD: "password",
    dialect: "mysql",
    user: 'sqluser',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};