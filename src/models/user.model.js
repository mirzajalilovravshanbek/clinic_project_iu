const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db-sequelize');
const BranchModel = require('./branch.model');
const DoctorModel = require('./doctor.model');
const InspectionCategoryModel = require('./inspection_category.model');
const RoomModel = require('./room.model');
class UserModel extends Model {
    toJSON () {//Api da ishladi
    var values = Object.assign({}, this.get());
        delete values.password;
        return values;
    }
}

UserModel.init({
    id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false
    },
    username : {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true,
    },
    password : {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    role : {
        type: DataTypes.STRING(20),
        defaultValue: 'Register'
    },
    room_id:{
        type: DataTypes.INTEGER,
    },
    doctor_id:{
        type: DataTypes.INTEGER,
    },
    inspection_category_id:{
        type: DataTypes.INTEGER,
    },
    type:{
        type: DataTypes.STRING(20),
    },
    salary:{
        type: DataTypes.DECIMAL(17,3),
    },
    branch_id:{
        type: DataTypes.INTEGER,
    },
    token: {
        type: DataTypes.VIRTUAL,
    }
}, {
  sequelize,
  modelName: 'UserModel',
  tableName: 'user',
  timestamps: false,
  //findOne da yoki findAll da chaqirish kerak
  scopes: {
    withoutPassword: {
      attributes: { exclude: ['password'] },
    }
  }
});
UserModel.belongsTo(RoomModel, {as: 'room', foreignKey: 'room_id'});
RoomModel.hasOne(UserModel, {as: 'user', foreignKey: 'room_id'});
UserModel.belongsTo(DoctorModel, {as: 'doctor', foreignKey: 'doctor_id'});
DoctorModel.hasOne(UserModel, {as: 'room', foreignKey: 'doctor_id'});
UserModel.belongsTo(InspectionCategoryModel, {as: 'inspection_category', foreignKey: 'inspection_category_id'});
UserModel.belongsTo(BranchModel, {as: 'branch', foreignKey: 'branch_id'});



module.exports = UserModel;