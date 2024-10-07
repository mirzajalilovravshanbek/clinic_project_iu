const express = require('express');
const router = express.Router();
const RegionController = require('../controllers/region.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/regionValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(RegionController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(RegionController.getById));
router.post('/', auth(),Schema, awaitHandlerFactory(RegionController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(RegionController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(RegionController.delete));

module.exports = router;
