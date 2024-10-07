const ModelModel = require('../models/registration.model');
const History = require('../models/registration_history.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const Registration_inspectionModel = require('../models/registration_inspection.model');
const Registration_inspection_historyModel = require('../models/registration_inspection_history.model');
const Registration_doctor_historyModel = require('../models/registration_doctor_history.model');
const Registration_inspection_childModel = require('../models/registration_inspection_child.model');
const Registration_doctorModel = require('../models/registration_doctor.model');
const Registration_recipeModel = require('../models/registration_recipe.model');
const Registration_filesModel = require('../models/registration_files.model');
const UserModel = require('../models/user.model');
const PatientModel = require('../models/patient.model');
const QueueModel = require('../models/queue.model');
const RoomModel = require('../models/room.model');
const BranchModel = require('../models/branch.model');
const DoctorModel = require('../models/doctor.model');
const InspectionModel = require('../models/inspection.model');
const { add } = require('lodash');
const Doctor_categoryModel = require('../models/doctor_category.model');
const PillModel = require('../models/pill.model');
const MkbModel = require('../models/mkb.model');
const RegionModel = require('../models/region.model');
const db = require("../db/db-sequelize");
const { Op, where } = require("sequelize");
const sequelize = require('sequelize');
const DistrictModel = require('../models/district.model');
const NeighboarhoodModel = require('../models/neighboarhood.model');
const Registration_doctor_diagnosModel = require('../models/registration_doctor_diagnos.model');
class PrixodController {
    q=[];
    getAll = async (req, res, next) => {
        let Datalist = await ModelModel.findAll({
            // attributes: ['id', 'created_at', 'summa', 'count_all'],
            include: [
                { model: UserModel,as: 'user', attributes : ['username'] },
                { model: PatientModel, as: 'patient', attributes : ['fullname'] },
            ],
            // limit:100,
            order: [
                ['created_at', 'DESC'],
                ['id', 'DESC']
            ],
        });

        res.send(Datalist);
    };
    getByBranch = async (req, res, next) => {
        let Datalist = await ModelModel.findAll({
            where:{ branch_id: req.params.branch },
            include: [
                { model: UserModel,as: 'user', attributes : ['username'] },
                { model: PatientModel, as: 'patient', attributes : ['fullname'] },
            ],
            // limit:100,
            order: [
                ['created_at', 'DESC'],
                ['id', 'DESC']
            ],
        });

        res.send(Datalist);
    };
    getMkbById = async (req, res, next) => {
        let Datalist = await MkbModel.findAll({
            where:{ id: req.params.id },
            order: [
                ['id', 'DESC']
            ],
        });

        res.send(Datalist);
    };
    
    getByPatients = async (req, res, next) => {
        let Datalist = await ModelModel.findAll({
            where:{ patient_id: req.params.patient },
            include: [
                { model: PatientModel,as: 'patient',
                include:[
                    {model:RegionModel,as:'region'},
                    {model:DistrictModel,as:'district'},
                    {model:NeighboarhoodModel,as:'neighboarhood'},
                ]},
                { model: Registration_doctorModel,as: 'doctor', 
                    include : [
                        { model: Registration_recipeModel, as: 'reciept',
                        include:[
                            {model:PillModel,as:'pill'}
                        ]},
                        { model: DoctorModel, as: 'doctor',
                    include:[
                        {model:BranchModel,as:'branch',attributes:['name']},
                        {model:Doctor_categoryModel,as:'category',attributes:['name']},
                        {model:UserModel,as: 'room',attributes:['room_id'],
                        include:[
                            {model:RoomModel,as:'room',attributes:['name']}
                        ]}
                    ]}
                    ]
                },
                { model: Registration_inspectionModel,as: 'inspection', 
                    include : [
                        { model: Registration_inspection_childModel, as: 'child'},
                        { model: InspectionModel, as: 'inspection'}
                    ]
                },
                { model: Registration_filesModel,as: 'files'},
            ],
            order: [
                ['id', 'DESC']
            ],
        });

        res.send(Datalist);
    };
    getByDoctor = async (req, res, next) => {
        let user = await UserModel.findOne({
            where:{ id: req.params.doctor }
        });
        if(user!=null){
        let doctors=await Registration_doctorModel.findAll({
            where:{doctor_id:user.doctor_id},
            attributes:['registration_id']
        });
        let inspections=await Registration_inspectionModel.findAll({
            where:{user_id:user.id},
            attributes:['registration_id']
        });
        var ids=[];
        for (let index = 0; index < doctors.length; index++) {
            ids.push(doctors[index].registration_id);
        }
        for (let index = 0; index < inspections.length; index++) {
            ids.push(inspections[index].registration_id);
        }
        let Datalist = await ModelModel.findAll({
            where:{ id:{  [Op.in]: ids}},
            include: [
                { model: UserModel,as: 'user', attributes : ['username'] },
                { model: PatientModel, as: 'patient', attributes : ['fullname'] },
            ],
            order: [
                ['created_at', 'DESC'],
                ['id', 'DESC']
            ],
        });
        res.send(Datalist);
        }else {
            throw new HttpException(404, 'user Not found');
        }
    };
    getByInspection = async (req, res, next) => {
        let user=await UserModel.findOne({where:{id:req.params.inspection}});
        let Datalist = await ModelModel.findAll({
            include: [
                { model: Registration_inspectionModel,as: 'inspection', attributes : ['user_id','inspection_id'],
            include:[
                {
                    model:InspectionModel,as:'inspection',attributes:['category_id']
                    // ,where:{'category_id':user.inspection_category_id}
                }
            ],
            // where:{'$inspection.category_id$':user.inspection_category_id},
            },
            
                { model: UserModel,as: 'user', attributes : ['username'] },
                { model: PatientModel, as: 'patient', attributes : ['fullname'] },
            ],
            where: {
                '$inspection.inspection.category_id$': user.inspection_category_id
            },
            order: [
                ['created_at', 'DESC'],
                ['id', 'DESC']
            ],
        });
        res.send(Datalist);
    };

    getById = async (req, res, next) => {
        const Prixod = await ModelModel.findOne({
            where:{ id: req.params.id },
            include: [
                { model: Registration_doctorModel,as: 'doctor', 
                    include : [
                        { model: Registration_recipeModel, as: 'reciept',
                        include:[
                            {model:PillModel,as:'pill'}]
                    },
                        { model: Registration_doctor_diagnosModel, as: 'diagnostics',
                        include:[
                        { model: MkbModel, as: 'diagnos'},
                        ]
                    },
                        { model: DoctorModel, as: 'doctor',
                    include:[
                        {model:BranchModel,as:'branch',attributes:['name']},
                        {model:Doctor_categoryModel,as:'category',attributes:['name']},
                        {model:UserModel,as: 'room',attributes:['room_id'],
                        include:[
                            {model:RoomModel,as:'room',attributes:['name']}
                        ]}
                    ]}
                    ]
                },
                { model: Registration_inspectionModel,as: 'inspection', 
                    include : [
                        { model: Registration_inspection_childModel, as: 'child'},
                        { model: UserModel, as: 'user',attributes:['username']},
                        { model: InspectionModel, as: 'inspection',
                        include:[
                            {model:UserModel,as:'user',attributes:['username']}
                        ]
                    }
                    ]
                },
                { model: Registration_filesModel,as: 'files'},
                { model: PatientModel,as: 'patient'},
            ],
        });
        if (Prixod === null) {
            throw new HttpException(404, 'Not found');
        }
        res.send(Prixod);
    };
    getQueue = async (req, res, next) => {
        const Prixod = await QueueModel.findAll({
            where:{ 
                branch_id: req.params.branch,
                status:{[Op.not]:'complete'}
            },
            attributes:['room_id','number'],
            group: ['room_id'],
            include: [
                { model: RoomModel,as: 'room',attributes:['name'],
                 include: [
                    { model: UserModel,as: 'user',attributes:['username']}
                ],},
                { model: PatientModel,as: 'patient',attributes:['fullname']}
                // { model: BranchModel,as: 'branch'},
            ],
            // limit:100,
            order: [
                ['number', 'ASC']
            ],
        });
        if (Prixod === null) {
            throw new HttpException(404, 'Not found');
        }
        res.send(Prixod);
    };
    delQueue = async (req, res, next) => {
        let time=Math.floor(new Date().getTime() / 1000)-20000;
        await QueueModel.destroy({where:{datetime:{[Op.lte]:time}}});
        res.send('deleted');
    };
    setArchive=async (req, res, next) => {
        await db.query("INSERT INTO registration_inspection_child_history SELECT * FROM registration_inspection_child");
        await db.query("DELETE from registration_inspection_child");
        await db.query("INSERT INTO registration_inspection_history SELECT * FROM registration_inspection");        
        await db.query("DELETE from registration_inspection");
        await db.query("INSERT INTO registration_files_history SELECT * FROM registration_files");
        await db.query("DELETE from registration_files");
        await db.query("INSERT INTO register_doctor_diagnos_history (diagnos_id,parent_id,registration_id) SELECT diagnos_id,parent_id,registration_id FROM register_doctor_diagnos");
        await db.query("DELETE from register_doctor_diagnos");
        await db.query("INSERT INTO registration_recipe_history (doc_id,registration_id,pill_id,time,day,comment)  SELECT doc_id,registration_id,pill_id,time,day,comment FROM registration_recipe");
        await db.query("DELETE from registration_recipe");
        await db.query("INSERT INTO registration_doctor_history SELECT * FROM registration_doctor");
        await db.query("DELETE from registration_doctor");
        await db.query("INSERT INTO registration_history SELECT * FROM registration");
        await db.query("DELETE from registration");
        res.send('okey');
    };
    getMkb = async (req, res, next) => {
        if(req.params.id==0){
            req.params.id=null;
        }
        let Datalist = await MkbModel.findAll({
            where:{ parent_id: req.params.id},
        });

        res.send(Datalist);
    };
    getPechat = async (req, res, next) => {
        const Prixod = await QueueModel.findAll({
            where:{ patient_id: req.params.patient,status:"waiting" },
            include: [
                { model: RoomModel,as: 'room',
                include: [
                    { model: UserModel,as: 'user'}
                ],

            },
                { model: PatientModel,as: 'patient'},
                { model: BranchModel,as: 'branch'},
            ],
            order: [
                ['number', 'ASC']
            ],
        });
        if (Prixod === null) {
            throw new HttpException(404, 'Not found');
        }
        for(var element of Prixod){
            element.status='printed';
            await element.save();
        }
        res.send(Prixod);
    };
    getByPatient = async (req, res, next) => {
        const Prixod = await ModelModel.findAll({
            where:{ patient_id: req.params.patient },
            include: [
                { model: PatientModel,as: 'patient'},
                { model: Registration_doctorModel,as: 'doctor', 
                    include : [
                        { model: Registration_recipeModel, as: 'recipe'}
                    ]
                },
                { model: Registration_inspectionModel,as: 'inspection', 
                    include : [
                        { model: Registration_inspection_childModel, as: 'child'}
                    ]
                },
                { model: Registration_filesModel,as: 'files'},
            ],
        });
        if (Prixod === null) {
            throw new HttpException(404, 'Not found');
        }
        res.send(Prixod);
    };

    inspection_report = async (req, res, next) => {        
        const model = await Registration_inspection_historyModel.findAll({
                attributes: [[sequelize.fn('COUNT', 0), 'count']],
            include:[
                { model: InspectionModel, as: 'inspection',attributes:['name']},
                { model: History, as: 'registration',where:{
                    "branch_id":req.body.branch_id,
                    "created_at": {
                        [Op.and]: {
                          [Op.gte]: req.body.date1,
                          [Op.lte]: req.body.date2
                        }
                    },
                },
                attributes:['created_at']
            },
            ],
            where: {
                '$registration.created_at$': {
                    [Op.and]: {
                        [Op.gte]: req.body.date1,
                        [Op.lte]: req.body.date2
                      }
                }
            },
            group: ['inspection_id'],
            order: [
                ['registration_id', 'ASC']
            ],
        });
        
        if (!model) {
            throw new HttpException(500, 'Something went wrong');
        }
        res.status(201).send(model);

    };
    doctor_report = async (req, res, next) => {        
        const model = await Registration_doctor_historyModel.findAll({
                attributes: [[sequelize.fn('COUNT', 0), 'count']],
            include:[
                { model: DoctorModel, as: 'doctor',attributes:['name']},
                { model: History, as: 'registration',where:{
                    "branch_id":req.body.branch_id,
                    "created_at": {
                        [Op.and]: {
                          [Op.gte]: req.body.date1,
                          [Op.lte]: req.body.date2
                        }
                    },
                },
                attributes:['created_at']
            },
            ],
            where: {
                '$registration.created_at$': {
                    [Op.and]: {
                        [Op.gte]: req.body.date1,
                        [Op.lte]: req.body.date2
                      }
                }
            },
            group: ['doctor_id'],
            order: [
                ['registration_id', 'ASC']
            ],
        });
        
        if (!model) {
            throw new HttpException(500, 'Something went wrong');
        }
        res.status(201).send(model);

    };
    create = async (req, res, next) => {
        this.checkValidation(req);
        
        var {inspection,doctor,files, ...data} = req.body;
        data.created_at=Math.floor(new Date().getTime() / 1000);
        const model = await ModelModel.create(data);
        
        if (!model) {
            throw new HttpException(500, 'Something went wrong');
        }
        await this.#inspectionadd(model, inspection);
        await this.#doctoradd(model, doctor);
        await this.#filesadd(model, files);
        await this.#queue();
        res.status(201).send(model);

    };

    update = async (req, res, next) => {
        this.checkValidation(req);

        var {inspection,doctor,files, ...data} = req.body;
        var id = parseInt(req.params.id);
        var model = await ModelModel.findOne({where : {id: id}})

        if (!model) {
            throw new HttpException(404, 'data not found');
        } 
        try{
            model.updated_at=Math.floor(new Date().getTime() / 1000);
            model.user_id = data.user_id;
            model.status = data.status;
            model.patient_id = data.patient_id;
            model.type_service = data.type_service;
            model.height = data.height;
            model.weight = data.weight;
            model.branch_id = data.branch_id;
            model.complaint = data.complaint;
            await model.validate();
            await model.save();
            await this.#inspectionadd(model, inspection,false);
            await this.#doctoradd(model, doctor,false);
            await this.#filesadd(model, files,false);
            await this.#queue(false);
            res.send(model);    
        }catch(e){
            if(e instanceof ValidationError){
                res.status(404).send(e.errors[0].message);
                return;
            }
            throw new HttpException(500, 'Something went wrong');
        }

    };

    delete = async (req, res, next) => {
        const id = req.params.id;
        
        const result = await ModelModel.destroy({where : {id: id } });
        await this.#deletedoctor(id);
        await this.#deleteInspection(id);
        await this.#deleteFiles(id);
        if (!result) {
            throw new HttpException(404, 'Not found');
        }


        res.send('Has been deleted' );
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }

    #inspectionadd = async(model, inspection, insert = true) => {
        if(!insert){
            await this.#deleteInspection(model.id);
        }
        var dds;
        for(var element of inspection){
            var {child,inspection, ...data} = element;
            data.registration_id=model.id;
            dds={"inspection_id":data.inspection_id,"registration_id":model.id,"type":data.type,"price":data.price,"user_id":data.user_id,'status':data.status}
            const models = await Registration_inspectionModel.create(dds);
            var inspectionone=await InspectionModel.findOne({
                where:{id:data.inspection_id}
            });
                var user=await UserModel.findOne({
                    where:{id:inspectionone.user_id}
                });
                function isHave(item) { 
                    return item.room_id == user.room_id&&item.patient_id == model.patient_id&&item.branch_id==user.branch_id;
                  }
                  
                var have=await this.q.find(isHave);
                if(have==undefined){
                    this.q.push({"room_id":user.room_id,"patient_id":model.patient_id,"number":0,"datetime":Math.floor(new Date().getTime() / 1000),"branch_id":user.branch_id,"status":data.status});
                }
                else if(data.status!=have.status){
                    if(data.status!='complete'){
                        var index=this.q.findIndex(isHave);
                        this.q[index].status=have.status;
                    }else if(have.status!='complete'){
                        var index=this.q.findIndex(isHave);
                        this.q[index].status=have.status;
                    }
                }
            await this.#inspectionchildadd(models, child); 
        }
    }
    #inspectionchildadd = async(models, child) => {
        var dds;
        for(var element of child){
            dds={"parent_id":models.id,"text":element.text,"norm":element.norm,"name":element.name,"registration_id":models.registration_id,"status":element.status,"price":element.price,"checked":element.checked,"file":element.file}

            await Registration_inspection_childModel.create(dds); 
        }
    }
    #doctoradd = async(model, doctor, insert = true) => {
        if(!insert){
            await this.#deletedoctor(model.id);
        }
        for(var element of doctor){
            var {reciept,diagnostics,...data} = element;
            var news={
                "doctor_id":data.doctor_id,
                "registration_id":model.id,
                "price":data.price,
                "complaint":data.complaint,
                "medical_history":data.medical_history,
                "objective_vision":data.objective_vision,
                "instrumental":data.instrumental,
                "status":data.status,
                "diagnos":data.diagnos,
                "procedure":data.procedure,
                "concomitant":data.concomitant,
                "recommended":data.recommended};
            const models = await Registration_doctorModel.create(news);
            var user=await UserModel.findOne({
                where:{doctor_id:data.doctor_id}
            });
            function isHave(item) { 
                return item.room_id == user.room_id&&item.patient_id == model.patient_id&&item.branch_id==user.branch_id;
              }
            var have=await this.q.find(isHave);
            if(have==undefined){
                this.q.push({"room_id":user.room_id,"patient_id":model.patient_id,"number":0,"datetime":Math.floor(new Date().getTime() / 1000),"branch_id":user.branch_id,"status":data.status});
            }else if(data.status!=have.status){
                if(data.status!='complete'){
                    var index=this.q.findIndex(isHave);
                    this.q[index].status=have.status;
                } else if(have.status!='complete'){
                    var index=this.q.findIndex(isHave);
                    this.q[index].status=have.status;
                }
            }
            await this.#recieptadd(models, element.reciept); 
            await this.#diagnosadd(models, element.diagnostics); 
        }
    }
    #recieptadd = async(model, reciept) => {
        var adds;
        for(var element of reciept){
            adds={
                "doc_id":model.id,
                "registration_id":model.registration_id,
                'pill_id':element.pill_id,
                "time":element.time,
                "day":element.day,
                "comment":element.comment};
            await Registration_recipeModel.create(adds); 
        }
    }
    #diagnosadd = async(model, diagnostics) => {
        var adds;
        for(var element of diagnostics){
            adds={
                "parent_id":model.id,
                "diagnos_id":element.diagnos_id};
            await Registration_doctor_diagnosModel.create(adds); 
        }
    }
    #filesadd = async(model, files,insert = true) => {
        if(!insert){
            await this.#deleteFiles(model.id);
        }
        var asas;
        for(var element of files){
            asas={'registration_id':model.id,"href":element.href};
            await Registration_filesModel.create(asas); 
        }
    }
    #queue = async(insert=true) => {
        for(var element of this.q){
            if(!insert){
                var has=await QueueModel.findOne({
                    where:{
                        status:{[Op.not]:'complete'},
                        room_id: element.room_id,
                        patient_id: element.patient_id,
                        branch_id:element.branch_id
                    }
                });
                if(has!=null){
                    if(element.status!=has.status){
                        has.status=element.status;
                        await has.save();
                    }
                }else if(element.status!='complete') {
                    var que=await QueueModel.findOne({
                        where:{ 
                            room_id: element.room_id,
                        },
                        order: [
                            ['number', 'DESC']
                        ],
                    });
                    if(que!=null){
                        element.number=que.number+1;
                    }else{
                        element.number=1;
                    }
                    await QueueModel.create(element);
                }
            }else{
                var que=await QueueModel.findOne({
                    where:{ 
                        room_id: element.room_id,
                    },
                    order: [
                        ['number', 'DESC']
                    ],
                });
                if(que!=null){
                    element.number=que.number+1;
                }else{
                    element.number=1;
                }
                await QueueModel.create(element); 

            }
        } 
        this.q=[];
    }
    #deletedoctor = async(doc_id) => {
        await Registration_doctorModel.destroy({where: {registration_id: doc_id}})
        await Registration_recipeModel.destroy({where: {registration_id: doc_id}})
        await Registration_doctor_diagnosModel.destroy({where: {registration_id: doc_id}})
    }
    #deleteInspection = async(doc_id) => {
        await Registration_inspectionModel.destroy({where: {registration_id: doc_id}})
        await Registration_inspection_childModel.destroy({where: {registration_id: doc_id}})
    }
    #deleteFiles = async(doc_id) => {
        await Registration_filesModel.destroy({where: {registration_id: doc_id}})
    }
}

module.exports = new PrixodController;