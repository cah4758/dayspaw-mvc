const sequelize = require("../config/connection");
<<<<<<< HEAD
const { User, Client } = require("../models");

const userData = require("./userData.json");
<<<<<<< HEAD
// const clientData = require('./clients.json')
=======
const clientData = require('./clients.json')
=======
const { User, Appointment, Customer } = require('../models');

const userData = require("./userData.json");
const apptData = require("./appointmentData.json");
const custData = require("./customerData.json");
>>>>>>> 94a484325afac43a37af460b1e8f050f8495c508
>>>>>>> main
// Can put dogdata as our second data source?

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

<<<<<<< HEAD
  const users = await User.bulkCreate(userData, {
=======
  await Appointment.bulkCreate(apptData);
  await Customer.bulkCreate(custData);


  await User.bulkCreate(userData, {
>>>>>>> 94a484325afac43a37af460b1e8f050f8495c508
    individualHooks: true,
    returning: true,
  });

  // for (const client of clientData) {
  //   await Client.create({
  //     ...client,
  //     user_id: Math.floor(Math.random())*users.length,
  //   });
  // }

  process.exit(0);
};


seedDatabase();
