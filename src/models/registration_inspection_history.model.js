const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const Registration_inspection_child_historyModel = require('./registration_inspection_child_history.model');
const InspectionModel = require('./inspection.model');
const Registration_historyModel = require('./registration_history.model');
class Registration_inspection_historyModel extends Model {}

Registration_inspection_historyModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    inspection_id: {
        type: DataTypes.INTEGER,
    },
    registration_id : {
        type: DataTypes.INTEGER,
    },
    type:{
        type:DataTypes.BOOLEAN
    },
    price:{
        type: DataTypes.INTEGER
    },
    user_id:{
        type: DataTypes.INTEGER
    },
    status:{
        type: DataTypes.STRING(20)
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Registration_inspection_historyModel', // We need to choose the model name
  tableName: 'registration_inspection_history',
  timestamps: false,
});
Registration_inspection_historyModel.hasMany(Registration_inspection_child_historyModel,{as: 'child',foreignKey: 'parent_id' });
Registration_inspection_historyModel.belongsTo(InspectionModel,{as: 'inspection',foreignKey: 'inspection_id' });
module.exports = Registration_inspection_historyModel;