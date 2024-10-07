const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const PatientModel = require('./patient.model');
const Registration_doctorModel = require('./registration_doctor.model');
const Registration_filesModel = require('./registration_files.model');
const Registration_inspectionModel = require('./registration_inspection.model');
const UserModel = require('./user.model');
class RegistrationModel extends Model {}

RegistrationModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    created_at : {
        type: DataTypes.INTEGER,
    },
    updated_at : {
        type: DataTypes.INTEGER,
    },
    status : {
        type: DataTypes.STRING(20),
    },
    patient_id : {
        type: DataTypes.INTEGER,
    },
    type_service : {
        type: DataTypes.STRING(20),
    },
    complaint : {
        type: DataTypes.STRING,
    },
    height:{
        type: DataTypes.DECIMAL(17,2)
    },
    weight:{
        type: DataTypes.DECIMAL(17,2)
    },
    branch_id:{
        type: DataTypes.INTEGER
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'RegistrationModel', // We need to choose the model name
  tableName: 'registration',
  timestamps: false,
});
RegistrationModel.belongsTo(PatientModel, {as: 'patient', foreignKey: 'patient_id'});
RegistrationModel.belongsTo(UserModel, {as: 'user', foreignKey: 'user_id'});
RegistrationModel.hasMany(Registration_doctorModel,{as: 'doctor',foreignKey: 'registration_id' });
RegistrationModel.hasMany(Registration_inspectionModel,{as: 'inspection',foreignKey: 'registration_id' });
RegistrationModel.hasMany(Registration_filesModel,{as: 'files',foreignKey: 'registration_id' });
module.exports = RegistrationModel;