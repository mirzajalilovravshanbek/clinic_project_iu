const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registration_history.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/registrationValidator.middleware');


 router.get('/', auth(), awaitHandlerFactory(registrationController.getAll)); 
 router.get('/id/:id', auth(), awaitHandlerFactory(registrationController.getById));
 router.get('/queue/patient/:patient', auth(), awaitHandlerFactory(registrationController.getPechat));
 router.get('/branch/:branch', auth(), awaitHandlerFactory(registrationController.getByBranch));
 router.get('/patient/:patient', auth(), awaitHandlerFactory(registrationController.getByPatients));
 router.get('/doctor/:doctor', auth(), awaitHandlerFactory(registrationController.getByDoctor));
 router.get('/inspection/:inspection', auth(), awaitHandlerFactory(registrationController.getByInspection));
 router.post('/', auth(),Schema, awaitHandlerFactory(registrationController.create));
 router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(registrationController.update));
 router.delete('/id/:id',auth(),awaitHandlerFactory(registrationController.delete));

module.exports = router;
