const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const BranchModel = require('./branch.model');
const DoctorCategoryModel = require('./doctor_category.model');
const UserModel = require('./user.model');
class DoctorModel extends Model {}

DoctorModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(60),
    },
    category_id:{
        type:DataTypes.INTEGER
    },
    branch_id:{
        type:DataTypes.INTEGER
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'DoctorModel', // We need to choose the model name
  tableName: 'doctor',
  timestamps: false,
});
DoctorModel.belongsTo(DoctorCategoryModel, {as: 'category', foreignKey: 'category_id'});
module.exports = DoctorModel;