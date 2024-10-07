const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const DoctorModel = require('./doctor.model');
const MkbModel = require('./mkb.model');
const Registration_doctor_diagnosModel = require('./registration_doctor_diagnos.model');
const Registration_recipeModel = require('./registration_recipe.model');
class Registration_doctorModel extends Model {}

Registration_doctorModel.init({
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
  modelName: 'Registration_doctorModel', // We need to choose the model name
  tableName: 'registration_doctor',
  timestamps: false,
});

Registration_doctorModel.hasMany(Registration_recipeModel,{as: 'reciept',foreignKey: 'doc_id' });
Registration_doctorModel.hasMany(Registration_doctor_diagnosModel,{as: 'diagnostics',foreignKey: 'parent_id' });
Registration_doctorModel.belongsTo(DoctorModel,{as: 'doctor',foreignKey: 'doctor_id' });
module.exports = Registration_doctorModel;