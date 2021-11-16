const sequelize = require("../config/connection");
const { User, Client } = require("../models");

const userData = require("./userData.json");
const clientData = require('./clients.json')
// Can put dogdata as our second data source?

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const client of clientData) {
    await Client.create({
      ...client,
      user_id: Math.floor(Math.random())*users.length,
    });
  }

  process.exit(0);
};

seedDatabase();
