const express = require('express');
const router = express.Router();
const BranchController = require('../controllers/branch.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');
const branchCache = require('../middleware/cache/branchCache.middleware');
const { Schema } = require('../middleware/validators/branchValidator.middleware');


router.get('/', awaitHandlerFactory(BranchController.getAll)); 
router.get('/doctor', auth(), awaitHandlerFactory(BranchController.getByDoctor));
router.get('/inspection',auth(), awaitHandlerFactory(BranchController.getByInspection)); 
// router.get('/doctor', auth(), branchCache.doctor,  awaitHandlerFactory(BranchController.getByDoctor));
// router.get('/inspection',auth(), branchCache.inspection, awaitHandlerFactory(BranchController.getByInspection)); 
router.get('/id/:id', auth(), awaitHandlerFactory(BranchController.getById));
router.post('/', auth(),Schema, awaitHandlerFactory(BranchController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(BranchController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(BranchController.delete));

module.exports = router;
