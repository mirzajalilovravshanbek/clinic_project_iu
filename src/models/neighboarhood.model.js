const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class NeighboarhoodModel extends Model {}

NeighboarhoodModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(100),
    },
    district_id:{
        type:DataTypes.INTEGER
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'NeighboarhoodModel', // We need to choose the model name
  tableName: 'neighboarhood',
  timestamps: false,
});

module.exports = NeighboarhoodModel;