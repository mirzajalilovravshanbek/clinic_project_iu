const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class MkbModel extends Model {}

MkbModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    name : {
        type: DataTypes.STRING,
    },
    code: {
        type: DataTypes.STRING(20),
    },
    parent_id: {
        type: DataTypes.INTEGER,
    },
    parent_code: {
        type: DataTypes.STRING(20),
    },
    node_count: {
        type: DataTypes.INTEGER,
    },
    additional_info: {
        type: DataTypes.STRING,
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'MkbModel', // We need to choose the model name
  tableName: 'mkb',
  timestamps: false,
});

module.exports = MkbModel;