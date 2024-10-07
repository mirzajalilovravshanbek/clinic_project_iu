const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const DoctorModel = require('./doctor.model');
const Registration_doctor_diagnos_historyModel = require('./registration_doctor_diagnos_history.model');
const Registration_recipe_historyModel = require('./registration_recipe_history.model');
class Registration_doctor_historyModel extends Model {}

Registration_doctor_historyModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    doctor_id: {
        type: DataTypes.INTEGER,
    },
    registration_id : {
        type: DataTypes.INTEGER,
    },
    status:{
        type:DataTypes.STRING(20),
    },
    price:{
        type: DataTypes.DECIMAL(17,2)
    },
    complaint:{
        type: DataTypes.STRING
    },
    medical_history:{
        type: DataTypes.STRING
    },
    objective_vision:{
        type: DataTypes.STRING
    },
    instrumental:{
        type:DataTypes.STRING
    },
    diagnos:{
        type:DataTypes.STRING
    },
    procedure:{
        type:DataTypes.STRING
    },
    recommended:{
        type:DataTypes.STRING
    },
    concomitant:{
        type:DataTypes.STRING
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Registration_doctor_historyModel', // We need to choose the model name
  tableName: 'registration_doctor_history',
  timestamps: false,
});

Registration_doctor_historyModel.hasMany(Registration_recipe_historyModel,{as: 'reciept',foreignKey: 'doc_id' });
Registration_doctor_historyModel.hasMany(Registration_doctor_diagnos_historyModel,{as: 'diagnostics',foreignKey: 'parent_id' });
Registration_doctor_historyModel.belongsTo(DoctorModel,{as: 'doctor',foreignKey: 'doctor_id' });
module.exports = Registration_doctor_historyModel;