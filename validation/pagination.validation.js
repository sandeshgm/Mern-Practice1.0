const { query} = require("express-validator");
const validation = require("../middleware/validation.middleware");

const paginationValidate = [
    query('page')
    .isNumeric().
    isInt({min : 1})
    .withMessage("Page should be number and greater than 0"),
    query('limit')
    .isNumeric()
    .isInt({min : 1})
    .withMessage("Limit should be number and greater than 0")   
]

module.exports = paginationValidate;