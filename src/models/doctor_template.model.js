const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const DoctorModel = require('./doctor.model');
const MkbModel = require('./mkb.model');
const Registration_doctor_diagnosModel = require('./registration_doctor_diagnos.model');
const Registration_recipeModel = require('./registration_recipe.model');
class Doctor_templateModel extends Model {}

Doctor_templateModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    doctor_id: {
        type: DataTypes.INTEGER,
    },
    complaint:{
        type: DataTypes.STRING
    },
    name:{
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
  modelName: 'Doctor_templateModel', // We need to choose the model name
  tableName: 'doctor_template',
  timestamps: false,
});
module.exports = Doctor_templateModel;