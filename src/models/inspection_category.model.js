const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const BranchModel = require('./branch.model');
class InspectionCategoryModel extends Model {}

InspectionCategoryModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    branch_id : {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING(100),
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'InspectionCategoryModel', // We need to choose the model name
  tableName: 'inspection_category',
  timestamps: false,
});
InspectionCategoryModel.belongsTo(BranchModel, {as: 'branch', foreignKey: 'branch_id'});
module.exports = InspectionCategoryModel;