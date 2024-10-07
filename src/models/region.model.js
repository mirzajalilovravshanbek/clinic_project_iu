const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class RegionModel extends Model {}

RegionModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(60),
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'RegionModel', // We need to choose the model name
  tableName: 'region',
  timestamps: false,
});

module.exports = RegionModel;