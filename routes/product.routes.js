const express = require('express');
const { getProduct, getProductById, addProducts, updateProduct, deleteProduct } = require('../controllers/products.controllers');
const managerAuth = require('../middleware/managerAuth.middleware');
const router = express.Router();

router.get("/", getProduct);
router.get("/", getProductById);
router.post("/add", managerAuth, addProducts);
router.patch("/:id", managerAuth, updateProduct);
router.delete("/:id", managerAuth, deleteProduct);

module.exports = router;