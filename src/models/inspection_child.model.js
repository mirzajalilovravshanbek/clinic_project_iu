const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
class InspectionChildModel extends Model {}

InspectionChildModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    norm : {
        type: DataTypes.STRING(20),
    },
    parent_id : {
        type: DataTypes.INTEGER,
    },
    price:{
        type:DataTypes.DECIMAL(17,2)
    },
    name: {
        type: DataTypes.STRING(100),
    },
    file: {
        type: DataTypes.VIRTUAL,
        defaultValue:""
    }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'InspectionChildModel', // We need to choose the model name
  tableName: 'inspection_child',
  timestamps: false,
});
module.exports = InspectionChildModel;