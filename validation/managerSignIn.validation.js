const { body } = require("express-validator");
const validate = require("../middleware/validation.middleware");

const managerSIgnInValidate = [
    body('email').notEmpty()
    .isEmail()
    .withMessage("Please enter your email address"),
    body('password').notEmpty()
    .withMessage("Please enter your password"),
    validate
];


module.exports = managerSIgnInValidate;