const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const PatientModel = require('./patient.model');
const Registration_doctor_historyModel = require('./registration_doctor_history.model');
const Registration_files_historyModel = require('./registration_files_history.model');
const Registration_inspection_historyModel = require('./registration_inspection_history.model');
const UserModel = require('./user.model');
class Registration_historyModel extends Model {}

Registration_historyModel.init({
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
  modelName: 'Registration_historyModel', // We need to choose the model name
  tableName: 'registration_history',
  timestamps: false,
});
Registration_historyModel.belongsTo(PatientModel, {as: 'patient', foreignKey: 'patient_id'});
Registration_historyModel.belongsTo(UserModel, {as: 'user', foreignKey: 'user_id'});
Registration_historyModel.hasMany(Registration_doctor_historyModel,{as: 'doctor',foreignKey: 'registration_id' });
Registration_historyModel.hasMany(Registration_inspection_historyModel,{as: 'inspection',foreignKey: 'registration_id' });
Registration_historyModel.hasMany(Registration_files_historyModel,{as: 'files',foreignKey: 'registration_id' });
Registration_inspection_historyModel.belongsTo(Registration_historyModel,{as: 'registration',foreignKey: 'registration_id' });
Registration_doctor_historyModel.belongsTo(Registration_historyModel,{as: 'registration',foreignKey: 'registration_id' });
module.exports = Registration_historyModel;