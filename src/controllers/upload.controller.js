const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const readXlsxFile = require('read-excel-file/node');
const InspectionChildModel = require('../models/inspection_child.model');
/******************************************************************************
 *                              Upload Controller
 ******************************************************************************/
class UploadController {
    inspection = async (req, res, next) => {
        this.checkValidation(req);
        let datalist = [], errors;
        let file_name = './upload/' + req.body.href;
        const schema = {
            'Тахлил' : {prop: 'name', type: String},
            'Норма' : {prop: 'norm', type: String},
            'Нарх' : {prop: 'price', type: Number} 
        }
        await readXlsxFile(file_name, {schema}).then((data) => {
            errors = data.errors;            
            datalist = data.rows;
        });
        if(errors.length === 0){
            for(var item of datalist){
                await InspectionChildModel.create({
                    name: item.name,
                    norm: item.norm,
                    price: item.price,
                    parent_id: 1
                });
            }
            res.send({'status':"complete"});
        }else
            res.status(400).send({
                "type": "error",
                "status": 400,
                "message": "Validation faild",
                "errors": errors
        });
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}



/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new UploadController;