const { body } = require('express-validator');

exports.Schema = [
    body('name')
        .exists()
        .withMessage('name bo\'lishi kerak')
        .isString()
        .withMessage('name matn bo\'lishi kerak'),
    body('district_id')
        .exists()
        .withMessage('district_id bo\'lishi kerak')
        .isInt().withMessage('district_id raqam bolishi kerak')
    ];