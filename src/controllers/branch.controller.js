const ModelModel = require('../models/branch.model');
const DistrictModel = require('../models/district.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const {ValidationError} = require('sequelize');
const DoctorModel = require('../models/doctor.model');
const InspectionModel = require('../models/inspection.model');
const Doctor_categoryModel = require('../models/doctor_category.model');
const UserModel = require('../models/user.model');
const RoomModel = require('../models/room.model');
const client = require('../startup/client');
class ModelController {
    getAll = async (req, res, next) => {
        let ModelList = await ModelModel.findAll({
            order: [
                ['name', 'ASC'],
                ['id', 'ASC']
            ],
            include: [
                { model: DistrictModel,as: 'district'}
            ]
        });
        res.send(ModelList);
    };

    getById = async (req, res, next) => {
        const Order = await ModelModel.findOne({
            where:{ id: req.params.id },
            include: [
                { model: DistrictModel,as: 'district'}
            ]
        });
        if (Order === null) {
            throw new HttpException(404, 'not found');
        }
        res.send(Order);
    };
    getByDoctor = async (req, res, next) => {
        const Order = await ModelModel.findAll({
            attributes:['id','name'],
            include: [
                { model: DoctorModel,as: 'doctor',attributes:['id','name'],
                include: [
                    { model: Doctor_categoryModel,as: 'category',attributes:['id','name']},
                    { model: ModelModel,as: 'branch',attributes:['id','name']},
                    { model: UserModel,as: 'room',attributes:['room_id'],
                include:[
                    {model:RoomModel,as:"room",attributes:['name']}
                ]
                }
                ]
            }
            ]
        });
        if (Order === null) {
            throw new HttpException(404, 'not found');
        }
        res.send(Order);
        client.setex('branch_doctor', 30000000, JSON.stringify(Order));
    };
    getByInspection = async (req, res, next) => {
        const Order = await ModelModel.findAll({
            attributes:['id','name'],
            include: [
                { model:InspectionModel,as: 'inspection',attributes:['type','name','id']}
            ]
        });
        if (Order === null) {
            throw new HttpException(404, 'not found');
        }
        res.send(Order);
        client.setex('branch_inspection', 30000000, JSON.stringify(Order));
    };
    create = async (req, res, next) => {
        this.checkValidation(req);        
        const model = await ModelModel.create(req.body);
        if (!model) {
            throw new HttpException(500, 'Something went wrong');
        }        
        res.status(201).send(model);
    };

    update = async (req, res, next) => {
        this.checkValidation(req);

        var {...data} = req.body;
        var id = parseInt(req.params.id);
        
        var model = await ModelModel.findOne({where : {id: id}})

        if (!model) {
            throw new HttpException(404, 'data not found');
        } 
        try{
            model.name = data.name;
            model.district_id = data.district_id;
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
        const result = await ModelModel.destroy({where:{ id: req.params.id} });
        if (!result) {
            throw new HttpException(404, 'Not found');
        }
        res.send('Has been deleted');
    };
    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }

}
module.exports = new ModelController;