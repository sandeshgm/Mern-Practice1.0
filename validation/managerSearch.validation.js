const {query} = require("express-validator");
const validate = require("../middleware/validation.middleware");

const managerSearchValidate =[
    query('search')
    .optional()
    .isAlpha()
    .withMessage("Searching should be string not a number"),
    validate
];

module.exports = managerSearchValidate;