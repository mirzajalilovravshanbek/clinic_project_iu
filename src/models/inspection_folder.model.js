const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const BranchModel = require('./branch.model');
class InspectionFolderModel extends Model {}

InspectionFolderModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    branch_id : {
        type: DataTypes.INTEGER,
    },
    parent_id : {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING(100),
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'InspectionFolderModel', // We need to choose the model name
  tableName: 'inspection_folder',
  timestamps: false,
});
InspectionFolderModel.belongsTo(BranchModel, {as: 'branch', foreignKey: 'branch_id'});
module.exports = InspectionFolderModel;