const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const DistrictModel = require('./district.model');
const DoctorModel = require('./doctor.model');
class BranchModel extends Model {}

BranchModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    district_id : {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING(60),
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'BranchModel', // We need to choose the model name
  tableName: 'branch',
  timestamps: false,
});
BranchModel.belongsTo(DistrictModel, {as: 'district', foreignKey: 'district_id'});
DoctorModel.belongsTo(BranchModel, {as: 'branch', foreignKey: 'branch_id'});
BranchModel.hasMany(DoctorModel,{as: 'doctor',foreignKey: 'branch_id' });
module.exports = BranchModel;