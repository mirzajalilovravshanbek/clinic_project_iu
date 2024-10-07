const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class Registration_filesModel extends Model {}

Registration_filesModel.init({
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
  modelName: 'Registration_filesModel', // We need to choose the model name
  tableName: 'registration_files',
  timestamps: false,
});

module.exports = Registration_filesModel;