const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registration.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/registrationValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(registrationController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(registrationController.getById));
router.get('/queue/branch/:branch', auth(), awaitHandlerFactory(registrationController.getQueue));
router.get('/queue/patient/:patient', auth(), awaitHandlerFactory(registrationController.getPechat));
router.get('/branch/:branch', auth(), awaitHandlerFactory(registrationController.getByBranch));
router.get('/patient/:patient', auth(), awaitHandlerFactory(registrationController.getByPatients));
router.get('/mkb/id/:id', auth(), awaitHandlerFactory(registrationController.getMkbById));
router.get('/doctor/:doctor', auth(), awaitHandlerFactory(registrationController.getByDoctor));
router.get('/inspection/:inspection', auth(), awaitHandlerFactory(registrationController.getByInspection));
router.get('/mkb/:id', auth(), awaitHandlerFactory(registrationController.getMkb));
router.get('/setarchive', awaitHandlerFactory(registrationController.setArchive));
router.post('/', auth(),Schema, awaitHandlerFactory(registrationController.create));
router.post('/report/inspection', auth(), awaitHandlerFactory(registrationController.inspection_report));
router.post('/report/doctor', auth(), awaitHandlerFactory(registrationController.doctor_report));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(registrationController.update));
router.delete('/queue/',Schema, awaitHandlerFactory(registrationController.delQueue));
router.delete('/id/:id',auth(),awaitHandlerFactory(registrationController.delete));

module.exports = router;
