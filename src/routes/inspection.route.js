const express = require('express');
const router = express.Router();
const InspectionController = require('../controllers/inspection.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/inspectionValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(InspectionController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(InspectionController.getById));
router.get('/parent/:parent', auth(), awaitHandlerFactory(InspectionController.getByParent));
router.post('/', auth(),Schema, awaitHandlerFactory(InspectionController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(InspectionController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(InspectionController.delete));

module.exports = router;
