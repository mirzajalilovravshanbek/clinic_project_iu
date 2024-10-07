const express = require('express');
const router = express.Router();
const pillController = require('../controllers/pill.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/pillValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(pillController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(pillController.getById));
router.post('/', auth(),Schema, awaitHandlerFactory(pillController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(pillController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(pillController.delete));

module.exports = router;
