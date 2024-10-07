const { body } = require('express-validator');
const Role = require('../../utils/userRoles.utils');


exports.createUserSchema = [
    body('username')
        .exists()
        .withMessage('username is required')
        .isLength({ min: 3, max: 60})
        .withMessage('username: belgilar soni [3, 60] oraliqda bo`lishi kerak'),
    body('password')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .isLength({ min: 3, max: 20})
        .withMessage('password: belgilar soni [3, 20] oraliqda bo`lishi kerak'),
    body('role')
        .exists()
        .withMessage('Role is required')
        .notEmpty()
        .isLength({ min: 6, max: 20})
        .withMessage('Role: belgilar soni [6, 20] oraliqda bo`lishi kerak')
];

exports.updateUserSchema = [
    body('username')
        .exists()
        .withMessage('username is required')
        .isLength({ min: 3, max: 60})
        .withMessage('username: belgilar soni [3, 60] oraliqda bo`lishi kerak'),
    body('password')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .isLength({ min: 3, max: 20})
        .withMessage('password: belgilar soni [3, 20] oraliqda bo`lishi kerak'),
    body('role')
        .exists()
        .withMessage('Role is required')
        .notEmpty()
        .isLength({ min: 6, max: 20})
        .withMessage('Role: belgilar soni [6, 20] oraliqda bo`lishi kerak')
];

exports.validateLogin = [
    body('username')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
    body('password')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .withMessage('Password must be filled')
];
exports.validateEmpty = [
    body('username')
    .optional()
    .isLength({ min: 3 })
    .withMessage('Must be at least 3 chars long'),
];