const express = require('express');
const router = express.Router();
const Doctor_templateController = require('../controllers/doctor_template.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/doctor_templateValidator.middleware');


router.get('/doctor/:doctor', auth(), awaitHandlerFactory(Doctor_templateController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(Doctor_templateController.getById));
router.post('/', auth(),Schema, awaitHandlerFactory(Doctor_templateController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(Doctor_templateController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(Doctor_templateController.delete));

module.exports = router;
