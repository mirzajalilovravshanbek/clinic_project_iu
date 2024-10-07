const { body } = require('express-validator');

exports.Schema = [
    body('name')
        .exists()
        .withMessage('name bo\'lishi kerak')
        .isString()
        .withMessage('name matn bo\'lishi kerak'),
    body('region_id')
        .exists()
        .withMessage('region_id bo\'lishi kerak').isInt().withMessage('region_id raqam bolishi kerak')];