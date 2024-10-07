const express = require('express');
const router = express.Router();
const neighboarhoodController = require('../controllers/neighboarhood.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/neighboarhoodValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(neighboarhoodController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(neighboarhoodController.getById));
router.get('/district/:district', auth(), awaitHandlerFactory(neighboarhoodController.getByDistrict));
router.post('/', auth(),Schema, awaitHandlerFactory(neighboarhoodController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(neighboarhoodController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(neighboarhoodController.delete));

module.exports = router;
