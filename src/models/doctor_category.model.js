const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class Doctor_categoryModel extends Model {}

Doctor_categoryModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(30),
    },
    price:{
        type:DataTypes.DECIMAL(12,2)
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Doctor_categoryModel', // We need to choose the model name
  tableName: 'doctor_category',
  timestamps: false,
});

module.exports = Doctor_categoryModel;