const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const PillModel = require('./pill.model');
class Registration_recipe_historyModel extends Model {}

Registration_recipe_historyModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    doc_id: {
        type: DataTypes.INTEGER,
    },
    registration_id: {
        type: DataTypes.INTEGER,
    },
    pill_id : {
        type: DataTypes.INTEGER,
    },
    time:{
        type: DataTypes.INTEGER
    },
    day:{
        type: DataTypes.INTEGER
    },
    comment:{
        type: DataTypes.STRING
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Registration_recipe_historyModel', // We need to choose the model name
  tableName: 'registration_recipe_history',
  timestamps: false,
});
Registration_recipe_historyModel.belongsTo(PillModel,{as: 'pill',foreignKey: 'pill_id' });

module.exports = Registration_recipe_historyModel;