const User = require("./User");
<<<<<<< HEAD
const Client = require("./Clients");

User.hasMany(Client, {
     foreignKey: 'user_id',
     onDelete: 'CASCADE'
})

Client.belongsTo(User, {
     foreignKey: 'user_id'
});

module.exports = { User, Client };
=======
const Appointment = require("./Appointment");
const Customer = require("./Customer");

Appointment.belongsTo(Customer, {
  foreignKey: "customer_id",
});

module.exports = { User, Appointment, Customer };
>>>>>>> 94a484325afac43a37af460b1e8f050f8495c508
