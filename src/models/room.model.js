const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const BranchModel = require('./branch.model');
const UserModel = require('./user.model');
class RoomModel extends Model {}

RoomModel.init({
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
        type: DataTypes.STRING(30),
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'RoomModel', // We need to choose the model name
  tableName: 'room',
  timestamps: false,
});
RoomModel.belongsTo(BranchModel, {as: 'branch', foreignKey: 'branch_id'});
module.exports = RoomModel;