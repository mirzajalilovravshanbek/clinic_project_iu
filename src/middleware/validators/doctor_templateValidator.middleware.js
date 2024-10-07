const { body } = require('express-validator');

exports.Schema = [
    body('doctor_id')
        .exists()
        .withMessage('doctor bo\'lishi kerak')
        .isInt()
        .withMessage('doctor raqam bolishi kerak'),
        body('name')
        .exists()
        .withMessage('name bo\'lishi kerak')
    ];