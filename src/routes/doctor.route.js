const express = require('express');
const router = express.Router();
const DoctorController = require('../controllers/doctor.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/doctorValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(DoctorController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(DoctorController.getById));
router.post('/', auth(),Schema, awaitHandlerFactory(DoctorController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(DoctorController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(DoctorController.delete));

module.exports = router;
