const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const RegionModel = require('./region.model');
class DistrictModel extends Model {}

DistrictModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    region_id : {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING(60),
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'DistrictModel', // We need to choose the model name
  tableName: 'district',
  timestamps: false,
});
DistrictModel.belongsTo(RegionModel, {as: 'region', foreignKey: 'region_id'});
module.exports = DistrictModel;