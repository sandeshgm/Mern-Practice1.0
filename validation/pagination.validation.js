const { query } = require('express-validator');
const validate = require('../middleware/validation.middleware');

const paginationValidate = [
  query('page')
    .optional()
    .isNumeric()
    .isInt({ min: 1 })
    .withMessage('Page should be number and greater than 0'),
  query('limit')
    .optional()
    .isNumeric()
    .isInt({ min: 1 })
    .withMessage('Limit should be number and greater than 0'),
  validate,
];

module.exports = paginationValidate;
