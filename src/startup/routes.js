const express = require("express");
const cors = require("cors");
const path = require("path");
const errorMiddleware = require('../middleware/error.middleware');
const userRouter = require('../routes/user.route');
const branchRouter = require('../routes/branch.route');
const districtRouter = require('../routes/district.route');
const inspectionRouter = require('../routes/inspection.route');
const patientRouter = require('../routes/patient.route');
const regionRouter = require('../routes/region.route');
const roomRouter = require('../routes/room.route');
const inspection_categoryRouter = require('../routes/inspection_category.route');
const doctor_categoryRouter = require('../routes/doctor_category.route');
const doctorRouter = require('../routes/doctor.route');
const inspection_folderRouter = require('../routes/inspection_folder.route');
const pillRouter = require('../routes/pill.route');
const neighboarhoodRouter = require('../routes/neighboarhood.route');
const registrationRouter = require('../routes/registration.route');
const registration_historyRouter = require('../routes/registration_history.route');
const uploadRouter = require('../routes/upload.route');
const doctor_templateRouter = require('../routes/doctor_template.route');

module.exports = function(app){
        app.use(express.json());
        app.use(cors());
        app.options("*", cors());
        app.use(express.static(path.join(__dirname, '../../dist')));
        app.use(`/api/user`, userRouter);     
        app.use(`/upload`, express.static('upload'));    
        app.use(`/api/branch`, branchRouter);   
        app.use(`/api/district`, districtRouter); 
        app.use(`/api/patient`, patientRouter);
        app.use(`/api/inspection`, inspectionRouter);   
        app.use(`/api/room`, roomRouter);   
        app.use(`/api/region`, regionRouter);
        app.use(`/api/doctor_category`, doctor_categoryRouter);  
        app.use(`/api/doctor`, doctorRouter);  
        app.use(`/api/inspection_category`, inspection_categoryRouter);  
        app.use(`/api/inspection_folder`, inspection_folderRouter);
        app.use(`/api/pill`, pillRouter);     
        app.use(`/api/neighboarhood`, neighboarhoodRouter);   
        app.use(`/api/registration`, registrationRouter);
        app.use(`/api/registration_history`, registration_historyRouter);  
        app.use(`/api/upload`, uploadRouter);  
        app.use(`/api/doctor_template`, doctor_templateRouter);          
        app.use(errorMiddleware);
}