const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class PillModel extends Model {}

PillModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(30),
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'PillModel', // We need to choose the model name
  tableName: 'pill',
  timestamps: false,
});

module.exports = PillModel;