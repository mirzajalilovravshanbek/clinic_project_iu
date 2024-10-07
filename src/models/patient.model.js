const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const DistrictModel = require('./district.model');
const NeighboarhoodModel = require('./neighboarhood.model');
const RegionModel = require('./region.model');
class PatientModel extends Model {}

PatientModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    fullname:{
        type:DataTypes.STRING(100)
    },
    name: {
        type: DataTypes.STRING(30),
    },
    lastname: {
        type: DataTypes.STRING(30),
    },
    patronymic: {
        type: DataTypes.STRING(40),
    },
    region_id: {
        type: DataTypes.INTEGER,
    },
    district_id: {
        type: DataTypes.INTEGER,
    },
    neighboarhood_id:{
        type:DataTypes.INTEGER
    },
    phone:{
        type:DataTypes.STRING(20)
    },
    passport:{
        type:DataTypes.STRING(9)
    },
    address:{
        type:DataTypes.STRING
    },
    gender:{
        type:DataTypes.STRING(10)
    },
    birthday:{
        type:DataTypes.INTEGER
    },
    disability:{
        type:DataTypes.BOOLEAN
    },
    d_control:{
        type:DataTypes.BOOLEAN
    },

}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'PatientModel', // We need to choose the model name
  tableName: 'patient',
  timestamps: false,
});
PatientModel.belongsTo(RegionModel, {as: 'region', foreignKey: 'region_id'});
PatientModel.belongsTo(DistrictModel, {as: 'district', foreignKey: 'district_id'});
PatientModel.belongsTo(NeighboarhoodModel, {as: 'neighboarhood', foreignKey: 'neighboarhood_id'});

module.exports = PatientModel;