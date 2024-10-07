const { body } = require('express-validator');

exports.Schema = [
    body('name')
        .exists()
        .withMessage('ismi bo\'lishi kerak')
        .isString()
        .withMessage('ismi matn bo\'lishi kerak'),
        body('lastname')
        .exists()
        .withMessage('familiya bo\'lishi kerak')
        .isString()
        .withMessage('familiya matn bo\'lishi kerak'),
    body('patronymic')
        .exists()
        .withMessage('otasining ismi bo\'lishi kerak')
        .isString()
        .withMessage('otasining ismi matn bo\'lishi kerak')
    ];