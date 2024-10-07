const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const BranchModel = require('./branch.model');
const InspectionCategoryModel = require('./inspection_category.model');
const InspectionChildModel = require('./inspection_child.model');
const UserModel = require('./user.model');
class InspectionModel extends Model {}

InspectionModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(100),
    },
    branch_id : {
        type: DataTypes.INTEGER,
    },
    parent_id : {
        type: DataTypes.INTEGER,
    },
    price:{
        type: DataTypes.DECIMAL(17,2)
    },
    type:{
        type: DataTypes.BOOLEAN
    },
    user_id:{
        type: DataTypes.INTEGER
    },
    category_id:{
        type: DataTypes.INTEGER
    },
    percent_bonus:{
        type: DataTypes.DECIMAL(5,2)
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'InspectionModel', // We need to choose the model name
  tableName: 'inspection',
  timestamps: false,
});
InspectionModel.belongsTo(BranchModel, {as: 'branch', foreignKey: 'branch_id'});
InspectionModel.belongsTo(UserModel, {as: 'user', foreignKey: 'user_id'});
InspectionModel.belongsTo(InspectionCategoryModel, {as: 'category', foreignKey: 'category_id'});
InspectionModel.hasMany(InspectionChildModel,{as: 'child',foreignKey: 'parent_id' });
BranchModel.hasMany(InspectionModel,{as: 'inspection',foreignKey: 'branch_id' });
module.exports = InspectionModel;