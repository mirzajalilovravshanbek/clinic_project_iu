const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const MkbModel = require('./mkb.model');
class Registration_doctor_diagnosModel extends Model {}

Registration_doctor_diagnosModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    diagnos_id: {
        type: DataTypes.INTEGER,
    },
    parent_id : {
        type: DataTypes.INTEGER,
    },
    registration_id : {
        type: DataTypes.INTEGER,
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Registration_doctor_diagnosModel', // We need to choose the model name
  tableName: 'register_doctor_diagnos',
  timestamps: false,
});
Registration_doctor_diagnosModel.belongsTo(MkbModel,{as: 'diagnos',foreignKey: 'diagnos_id' });
module.exports = Registration_doctor_diagnosModel;