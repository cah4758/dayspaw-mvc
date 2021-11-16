const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appointment extends Model {}

Customer.init(
  {
    appointment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    appointment_time: {
      type: DataTypes.STRING,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'customer',
  }
);

module.exports = Appointment;

