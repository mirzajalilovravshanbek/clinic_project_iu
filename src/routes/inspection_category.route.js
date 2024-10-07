const express = require('express');
const router = express.Router();
const Inspection_categoryController = require('../controllers/inspection_category.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/inspection_categoryValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(Inspection_categoryController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(Inspection_categoryController.getById));
router.post('/', auth(),Schema, awaitHandlerFactory(Inspection_categoryController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(Inspection_categoryController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(Inspection_categoryController.delete));

module.exports = router;
