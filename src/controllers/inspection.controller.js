const ModelModel = require('../models/inspection.model');
const BranchModel = require('../models/branch.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const {ValidationError} = require('sequelize');
const InspectionChildModel = require('../models/inspection_child.model');
const UserModel = require('../models/user.model');
const InspectionCategoryModel = require('../models/inspection_category.model');
class ModelController {
    getAll = async (req, res, next) => {
        let ModelList = await ModelModel.findAll({
            order: [
                ['name', 'ASC'],
                ['id', 'ASC']
            ],
            include: [
                { model: BranchModel,as: 'branch'},
                { model: UserModel,as: 'user'},
                { model: InspectionCategoryModel,as: 'category'},

            ]
        });
        res.send(ModelList);
    };
    getByParent = async (req, res, next) => {
        const Order = await ModelModel.findAll({
                where:{ parent_id: req.params.parent },
                attributes:['id', 'name'],
            });
        if (Order === null) {
            throw new HttpException(404, 'not found');
        }
        res.send(Order);
    };
    getById = async (req, res, next) => {
        const Order = await ModelModel.findOne({
            where:{ id: req.params.id },
            include: [
                { model: BranchModel,as: 'branch'},
                { model: InspectionChildModel,as: 'child'}
            ]
        });
        if (Order === null) {
            throw new HttpException(404, 'not found');
        }
        res.send(Order);
    };

    create = async (req, res, next) => {
        this.checkValidation(req);    
        var {child, ...data} = req.body;    
        const model = await ModelModel.create(data);
        await this.#child(model, child);
        
        if (!model) {
            throw new HttpException(500, 'Something went wrong');
        }        
        res.status(201).send(model);
    };

    update = async (req, res, next) => {
        this.checkValidation(req);

        var {child, ...data} = req.body;
        var id = parseInt(req.params.id);
        
        var model = await ModelModel.findOne({where : {id: id}})
        if (!model) {
            throw new HttpException(404, 'data not found');
        } 
        try{
            await this.#child(model,child,false);
            model.name = data.name;
            model.branch_id = data.branch_id;
            model.parent_id = data.parent_id;
            model.price = data.price;
            model.type = data.type;
            model.user_id = data.user_id;
            model.category_id = data.category_id;
            model.percent_bonus = data.percent_bonus;
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
    #child = async(model, child, insert = true) => {
        if(!insert){
            await this.#deletechild(model.id);
        }
        for(var element of child){
            element.parent_id=model.id;
            await InspectionChildModel.create(element);
        }
    }
    #deletechild = async(doc_id) => {
        await InspectionChildModel.destroy({where: {parent_id: doc_id}})
    }
    delete = async (req, res, next) => {
        const result = await ModelModel.destroy({where:{ id: req.params.id} });
        await this.#deletechild(req.params.id);
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