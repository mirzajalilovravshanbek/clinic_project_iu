const ModelModel = require('../models/doctor_template.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const {ValidationError} = require('sequelize');
class ModelController {
    getAll = async (req, res, next) => {
        let ModelList = await ModelModel.findAll({
            where:{ doctor_id: req.params.doctor },
            order: [
                ['id', 'ASC']
            ],
        });
        res.send(ModelList);
    };

    getById = async (req, res, next) => {
        const Order = await ModelModel.findOne({
            where:{ id: req.params.id }
        });
        if (Order === null) {
            throw new HttpException(404, 'not found');
        }
        res.send(Order);
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
            model.doctor_id = data.doctor_id;
            model.name = data.name;
            model.complaint = data.complaint;
            model.medical_history = data.medical_history;
            model.objective_vision = data.objective_vision;
            model.instrumental = data.instrumental;
            model.diagnos = data.diagnos;
            model.procedure = data.procedure;
            model.recommended = data.recommended;
            model.concomitant = data.concomitant;
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