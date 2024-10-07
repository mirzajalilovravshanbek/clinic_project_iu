const { body } = require('express-validator');

exports.Schema = [
    body('name')
        .exists()
        .withMessage('name bo\'lishi kerak')
        .isString()
        .withMessage('name matn bo\'lishi kerak'),
        body('branch_id')
        .exists()
        .withMessage('tuman bo\'lishi kerak').isInt().withMessage('tuman raqam bolishi kerak')];