const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Customer model
class Customer extends Model {}

Customer.init(
  {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [11],
      },
    },
    customer_email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
    dog_name: {
        type: DataTypes.STRING,
        allowNull: false,
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

module.exports = Customer;
