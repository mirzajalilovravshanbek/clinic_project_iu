const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, updateUserSchema, validateLogin, validateEmpty } = require('../middleware/validators/userValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(userController.getAll)); // localhost:3000/api/v1/users
router.get('/usernames', auth(), validateEmpty, awaitHandlerFactory(userController.getAllUsernames)); // localhost:3000/api/v1/usernames
router.get('/id/:id', auth(), awaitHandlerFactory(userController.getById)); // localhost:3000/api/v1/users/id/1
router.get('/branch/:branch', awaitHandlerFactory(userController.getByBranch));
router.post('/', auth(), createUserSchema, awaitHandlerFactory(userController.create)); // localhost:3000/api/v1/users
router.patch('/id/:id',auth(),updateUserSchema, awaitHandlerFactory(userController.update)); // localhost:3000/api/v1/users/id/1 , using patch for partial update
router.delete('/id/:id',auth(), awaitHandlerFactory(userController.delete)); // localhost:3000/api/v1/users/id/1
router.post('/login', validateLogin, awaitHandlerFactory(userController.userLogin)); // localhost:3000/api/v1/users/login

module.exports = router;