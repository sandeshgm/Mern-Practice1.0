const { body } = require('express-validator');
const validate = require('../middleware/validation.middleware')

const addProductValidate = [
  body('name')
    .notEmpty()
    .isAlpha()
    .withMessage('Name of product shoule be in string'),
  body('price')
    .notEmpty()
    .isNumeric()
    .isInt()
    .withMessage('Price should be greater than 0 or positive value'),
    body('availability')
    .notEmpty()
    .withMessage("Give information about availability"),
    validate,
];

module.exports = addProductValidate;
