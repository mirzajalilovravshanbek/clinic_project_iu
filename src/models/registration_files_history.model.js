const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class Registration_files_historyModel extends Model {}

Registration_files_historyModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    registration_id: {
        type: DataTypes.INTEGER,
    },
    href : {
        type: DataTypes.STRING(100),
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Registration_files_historyModel', // We need to choose the model name
  tableName: 'registration_files_history',
  timestamps: false,
});

module.exports = Registration_files_historyModel;