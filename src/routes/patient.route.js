const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/patientValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(patientController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(patientController.getById));
router.post('/', auth(),Schema, awaitHandlerFactory(patientController.create));
router.post('/search', auth(),Schema, awaitHandlerFactory(patientController.search));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(patientController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(patientController.delete));

module.exports = router;
