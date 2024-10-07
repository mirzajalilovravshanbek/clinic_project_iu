const express = require('express');
const router = express.Router();
const Inspection_folderController = require('../controllers/inspection_folder.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/inspection_folderValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(Inspection_folderController.getAll)); 
router.get('/branch/:branch', auth(), awaitHandlerFactory(Inspection_folderController.getByBranch));
router.get('/id/:id', auth(), awaitHandlerFactory(Inspection_folderController.getById));
router.post('/', auth(),Schema, awaitHandlerFactory(Inspection_folderController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(Inspection_folderController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(Inspection_folderController.delete));

module.exports = router;
