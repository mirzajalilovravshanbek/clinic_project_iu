const { body } = require('express-validator');

exports.Schema = [
    body('user_id')
        .exists()
        .withMessage('xodim bo\'lishi kerak')
        .isInt()
        .withMessage('xodim raqam bo\'lishi kerak'),
        body('patient_id')
        .exists()
        .withMessage('bemor bo\'lishi kerak')
        .isInt()
        .withMessage('bemor raqam bo\'lishi kerak')
    ];