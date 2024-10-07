const express = require('express');
const router = express.Router();
const DistrictController = require('../controllers/district.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/districtValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(DistrictController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(DistrictController.getById));
router.get('/region/:region', auth(), awaitHandlerFactory(DistrictController.getByRegion));
router.post('/', auth(),Schema, awaitHandlerFactory(DistrictController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(DistrictController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(DistrictController.delete));

module.exports = router;
