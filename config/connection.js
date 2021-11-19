const Sequelize = require('sequelize');
require('dotenv').config();
// Create a connection object
let sequelize;

if (process.env.DAYSPAW_DB) {
  sequelize = new Sequelize(process.env.DAYSPAW_DB);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
