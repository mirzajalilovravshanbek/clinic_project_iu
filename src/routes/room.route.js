const express = require('express');
const router = express.Router();
const RoomController = require('../controllers/room.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { Schema } = require('../middleware/validators/roomValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(RoomController.getAll)); 
router.get('/id/:id', auth(), awaitHandlerFactory(RoomController.getById));
router.get('/branch/:id', auth(), awaitHandlerFactory(RoomController.getByBranch));
router.post('/', auth(),Schema, awaitHandlerFactory(RoomController.create));
router.patch('/id/:id',auth(), Schema, awaitHandlerFactory(RoomController.update));
router.delete('/id/:id',auth(),awaitHandlerFactory(RoomController.delete));

module.exports = router;
