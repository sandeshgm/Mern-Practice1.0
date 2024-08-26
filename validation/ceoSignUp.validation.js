const { body } = require('express-validator');
const validate = require('../middleware/validation.middleware');

const ceoSignUpValidate = [
  body('name')
    .notEmpty()
    .isLength({ min: 3, max: 50 })
    .withMessage('Please enter your name.'),
  body('email')
    .notEmpty()
    .isEmail()
    .withMessage('Please enter your email address..'),
  body('password')
    .notEmpty()
    .withMessage(
      'At least 1 uppercase, 1 lowercase, 1 number, 1 special characters and 8 characters length is required..'
    ),
  validate,
];

module.exports = ceoSignUpValidate;
