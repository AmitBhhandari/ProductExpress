const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "Amitbhand68@", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
