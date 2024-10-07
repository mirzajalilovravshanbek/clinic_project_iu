const ModelModel = require('../models/patient.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const {ValidationError} = require('sequelize');
const RegionModel = require('../models/region.model');
const DistrictModel = require('../models/district.model');
const { Op } = require("sequelize");
const NeighboarhoodModel = require('../models/neighboarhood.model');
class ModelController {
    getAll = async (req, res, next) => {
        let ModelList = await ModelModel.findAll({
            order: [
                ['name', 'ASC'],
                ['id', 'ASC']
            ],
            limit:100,
            include: [
                { model: RegionModel,as: 'region'},
                { model: DistrictModel,as: 'district'},
                { model: NeighboarhoodModel,as: 'neighboarhood'}
            ]
        });
        res.send(ModelList);
    };

    getById = async (req, res, next) => {
        const Order = await ModelModel.findOne({
            where:{ id: req.params.id },
        });
        if (Order === null) {
            throw new HttpException(404, 'not found');
        }
        res.send(Order);
    };

    create = async (req, res, next) => {
        this.checkValidation(req);    
        req.body.fullname=req.body.lastname+" "+req.body.name+" "+req.body.patronymic;    
        const model = await ModelModel.create(req.body);
        
        if (!model) {
            throw new HttpException(500, 'Something went wrong');
        }        
        res.status(201).send(model);
    };
    search = async (req, res, next) => {
        let ModelList = await ModelModel.findAll({
            where:{ fullname:{  [Op.like]: '%'+req.body.search+'%'}},
            order: [
                ['name', 'ASC'],
                ['id', 'ASC']
            ],
            limit:100,
            include: [
                { model: RegionModel,as: 'region'},
                { model: DistrictModel,as: 'district'},
                { model: NeighboarhoodModel,as: 'neighboarhood'}
            ]
        });
        res.send(ModelList);
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
            model.fullname=data.lastname+" "+data.name+" "+data.patronymic;    
            model.name = data.name;
            model.lastname = data.lastname;
            model.patronymic = data.patronymic;
            model.region_id = data.region_id;
            model.district_id = data.district_id;
            model.neighboarhood_id = data.neighboarhood_id;
            model.phone = data.phone;
            model.passport = data.passport;
            model.address = data.address;
            model.gender = data.gender;
            model.birthday = data.birthday;
            model.disability = data.disability;
            model.d_control = data.d_control;
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