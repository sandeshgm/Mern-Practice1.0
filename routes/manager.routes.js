const express = require("express");
const {
  getAllManagers,
  getManagerById,
  updateManager,
  deleteManager,
} = require("../controllers/manager.controllers");
const checkSuperAdmin = require("../middleware/superAdmin.middleware");
const paginationValidate = require("../validation/pagination.validation");
const idValidate = require("../validation/idValidation");
const router = express.Router();

router.get("/", checkSuperAdmin, paginationValidate, getAllManagers);
router.get("/:id", checkSuperAdmin, idValidate, getManagerById);
router.patch("/:id", checkSuperAdmin, idValidate, updateManager);
router.delete("/:id", checkSuperAdmin, idValidate, deleteManager);

module.exports = router;