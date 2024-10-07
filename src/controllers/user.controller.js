const UserModel = require('../models/user.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret_jwt} = require('../startup/config');
const RoomModel = require('../models/room.model');
const DoctorModel = require('../models/doctor.model');
const InspectionCategoryModel = require('../models/inspection_category.model');
const BranchModel = require('../models/branch.model');

class UserController {
    getAll = async (req, res, next) => {
        let modelList = await UserModel.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: [
                { model: RoomModel,as: 'room'},
                { model: DoctorModel,as: 'doctor'},
                { model: InspectionCategoryModel,as: 'inspection_category'},
                { model: BranchModel,as: 'branch'}
            ]
        });
        res.send(modelList);
    };

    getAllUsernames = async (req, res, next) => {
        let userList = await UserModel.findAll({
            attributes:['id', 'username'],
            order:[
                ['username', 'ASC'],
                ['id', 'ASC']
            ]
        });
        res.send(userList);
    };
    getByBranch = async (req, res, next) => {
        let userList = await UserModel.findAll({where:{branch_id:req.params.branch},
            // attributes:['id', 'username'],
            order:[
                ['username', 'ASC'],
                ['id', 'ASC']
            ]
        });
        res.send(userList);
    };

    getById = async (req, res, next) => {
        const user = await UserModel.findOne({where:{ id: req.params.id }});
        if (!user) {
            throw new HttpException(404, 'User not found');
        }
        res.send(user);
    };

    getByUsername = async (req, res, next) => {
        const user = await UserModel.findOne({where:{ username: req.params.username }});
        if (!user) {
            throw new HttpException(404, 'User not found');
        }

        res.send(user);
    };

    getCurrentUser = async (req, res, next) => {

        res.send(req.currentUser);
    };

    create = async (req, res, next) => {
        this.checkValidation(req);

        await this.hashPassword(req);
        var {...user} = req.body;
        const model = await UserModel.create(user);

        if (!model) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send(model);
    };

    update = async (req, res, next) => {
        this.checkValidation(req);

        await this.hashPassword(req);

        var { confirm_password, ...user } = req.body;

         const model = await UserModel.findOne({where: {id: req.params.id}} );

        if (!model) {
            throw new HttpException(404, 'user not found');
        } 
        try{
            await this.hashPassword(req);
            model.username = user.username;
            model.role = user.role;
            model.room_id = user.room_id;
            model.doctor_id = user.doctor_id;
            model.inspection_category_id = user.inspection_category_id;
            model.type = user.type;
            model.salary = user.salary;
            model.branch_id = user.branch_id;
            model.password = user.password;
            await model.validate();
            await model.save();
        }catch(e){
            if(e instanceof ValidationError){
                res.status(404).send(e.errors[0].message);
                return;
            }
            throw new HttpException(500, 'Something went wrong');
        }
        res.send(model);
    };

    delete = async (req, res, next) => {
        const result = await UserModel.destroy({where:{ id: req.params.id} });
        if (!result) {
            throw new HttpException(404, 'User not found');
        }
        res.send('User has been deleted');
    };

    userLogin = async (req, res, next) => {
        this.checkValidation(req);

        const { username, password: pass } = req.body;

        const user = await UserModel.findOne({where:{ username: username }});

        if (!user) {
            throw new HttpException(401, 'Unable to login!');
        }
        const isMatch = await bcrypt.compare(pass, user.password);
        if (!isMatch) {
            throw new HttpException(401, 'Incorrect password!');
        }

        const token = jwt.sign({ user_id: user.id.toString() }, secret_jwt, {
            expiresIn: '365d'
        });

        user.token = token;
        res.send(user);
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }

    // hash password if it exists
    hashPassword = async (req) => {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 8);
        }
    }
}
module.exports = new UserController;