const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",

  
});

module.exports = db;