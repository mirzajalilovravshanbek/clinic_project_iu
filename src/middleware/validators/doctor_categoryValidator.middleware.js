const { body } = require('express-validator');

exports.Schema = [
    body('name')
        .exists()
        .withMessage('name bo\'lishi kerak')
        .isString()
        .withMessage('name matn bo\'lishi kerak'),
        body('price')
        .exists()
        .withMessage('narx bo\'lishi kerak')
        .isDecimal()
        .withMessage('narx raqam  bo\'lishi kerak')];