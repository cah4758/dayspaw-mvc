const User = require("./User");
const Appointment = require("./Appointment");
const Customer = require("./Customer");

Appointment.belongsTo(Customer, {
  foreignKey: "customer_id",
});

module.exports = { User, Appointment, Customer };
