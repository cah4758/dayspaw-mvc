const sequelize = require("../config/connection");

const {
  User,
  Appointment,
  Customer
} = require('../models');

const userData = require("./userData.json");
const apptData = require("./appointmentData.json");
const custData = require("./customerData.json");
// Can put dogdata as our second data source?

const seedDatabase = async () => {
  try {
    await sequelize.sync({
      force: true
    });
    await Appointment.bulkCreate(apptData);
    await Customer.bulkCreate(custData);


    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  } catch (error) {
    console.error(error)
  };

  process.exit(0);
};


seedDatabase();