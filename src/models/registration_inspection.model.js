const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const Registration_inspection_childModel = require('./registration_inspection_child.model');
const InspectionModel = require('./inspection.model');
const UserModel = require('./user.model');
class Registration_inspectionModel extends Model {}

Registration_inspectionModel.init({
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
  modelName: 'Registration_inspectionModel', // We need to choose the model name
  tableName: 'registration_inspection',
  timestamps: false,
});
Registration_inspectionModel.hasMany(Registration_inspection_childModel,{as: 'child',foreignKey: 'parent_id' });
Registration_inspectionModel.belongsTo(InspectionModel,{as: 'inspection',foreignKey: 'inspection_id' });
Registration_inspectionModel.belongsTo(UserModel,{as: 'user',foreignKey: 'user_id' });
module.exports = Registration_inspectionModel;