const express = require("express");
const { getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } = require("../controllers/customer.controllers");
const managerAuth = require("../middleware/managerAuth.middleware");
const router = express.Router();

router.get("/",  managerAuth, getAllCustomers);
router.get("/:id", managerAuth, getCustomerById);
router.patch("/:id", managerAuth, updateCustomer);
router.delete("/:id", managerAuth, deleteCustomer);

module.exports = router;