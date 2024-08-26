const { query} = require("express-validator");
const validate = require("../middleware/validation.middleware");

const idValidate = [
    query('id').isMongoId()
    .withMessage("Please enter correct id "),
    validate
];

module.exports = idValidate;