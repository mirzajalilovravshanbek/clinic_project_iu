const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const BranchModel = require('./branch.model');
const RoomModel = require('./room.model');
const PatientModel = require('./patient.model');
const UserModel = require('./user.model');
class QueueModel extends Model {}

QueueModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    room_id : {
        type: DataTypes.INTEGER,
    },
    patient_id : {
        type: DataTypes.INTEGER,
    },
    number : {
        type: DataTypes.INTEGER,
    },
    datetime: {
        type: DataTypes.INTEGER,
    },
    branch_id: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.STRING(20),
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'QueueModel', // We need to choose the model name
  tableName: 'queue',
  timestamps: false,
});
QueueModel.belongsTo(BranchModel, {as: 'branch', foreignKey: 'branch_id'});
QueueModel.belongsTo(RoomModel, {as: 'room', foreignKey: 'room_id'});
QueueModel.belongsTo(PatientModel, {as: 'patient', foreignKey: 'patient_id'});

module.exports = QueueModel;