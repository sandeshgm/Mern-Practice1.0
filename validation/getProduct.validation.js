const { query } = require('express-validator');
const validate = require('../middleware/validation.middleware');

const getProductValidate = [
  query('search')
    .optional()
    .isAlpha()
    .withMessage('Searching should be in String'),
  query('order')
    .optional()
    .isIn(['asc', 'desc'])
    .withMessage("Order must be either 'asc' or 'desc'"),
  query('minPrice').optional().isNumeric().isInt({ minPrice: 0 }),
  query('maxPrice')
    .optional()
    .isNumeric()
    .isInt({ min: 0 })
    .withMessage('Min Price and Max Price should be positive number'),
  validate,
];

module.exports = getProductValidate;
