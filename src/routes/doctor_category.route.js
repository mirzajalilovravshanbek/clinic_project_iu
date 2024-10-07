const express = require('express');
const router = express.Router();
const Doctor_categoryController = require('../controllers/doctor_category.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/doctor_categoryValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(Doctor_categoryController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(Doctor_categoryController.getById));
router.post('/', auth(),Schema, awaitHandlerFactory(Doctor_categoryController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(Doctor_categoryController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(Doctor_categoryController.delete));

module.exports = router;
