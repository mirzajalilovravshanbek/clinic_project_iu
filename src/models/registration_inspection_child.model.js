const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class Registration_inspection_childModel extends Model {}

Registration_inspection_childModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    parent_id: {
        type: DataTypes.INTEGER,
    },
    text : {
        type: DataTypes.STRING,
    },
    norm:{
        type: DataTypes.STRING(60)
    },
    name:{
        type: DataTypes.STRING(60)
    },
    registration_id:{
        type: DataTypes.INTEGER
    },
    status:{
        type: DataTypes.STRING(20)
    },
    price:{
        type: DataTypes.DECIMAL(17,2)
    },
    checked:{
        type: DataTypes.BOOLEAN
    },
    file:{
        type: DataTypes.STRING(100)
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Registration_inspection_childModel', // We need to choose the model name
  tableName: 'registration_inspection_child',
  timestamps: false,
});

module.exports = Registration_inspection_childModel;