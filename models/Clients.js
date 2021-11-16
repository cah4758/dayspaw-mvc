const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Client extends Model {}

Client.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    checkinTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    checkoutTime: {
     type: DataTypes.DATE,
     allowNull: false,
     defaultValue: DataTypes.NOW,
   },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'client',
  }
);

module.exports = Client;
