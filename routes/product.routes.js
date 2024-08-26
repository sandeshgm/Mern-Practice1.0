const express = require('express');
const { getProduct, getProductById, addProducts, updateProduct, deleteProduct } = require('../controllers/products.controllers');
const managerAuth = require('../middleware/managerAuth.middleware');
const addProductValidate = require('../validation/addProducts.validation');
const idValidate = require('../validation/idValidation');
const getProductValidate = require('../validation/getProduct.validation');
const paginationValidate = require('../validation/pagination.validation');
const router = express.Router();

router.get("/", getProductValidate, paginationValidate, getProduct);
router.get("/", idValidate, getProductById);
router.post("/", managerAuth, addProductValidate, addProducts);
router.patch("/:id", managerAuth,idValidate, updateProduct);
router.delete("/:id", managerAuth, idValidate, deleteProduct);

module.exports = router;