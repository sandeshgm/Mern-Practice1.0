const express = require("express");
const {
  getAllManagers,
  getManagerById,
  updateManager,
  deleteManager,
} = require("../controllers/manager.controllers");
const checkSuperAdmin = require("../middleware/superAdmin.middleware");
const router = express.Router();

router.get("/", checkSuperAdmin, getAllManagers);
router.get("/:id", checkSuperAdmin, getManagerById);
router.patch("/:id", checkSuperAdmin, updateManager);
router.delete("/:id", checkSuperAdmin, deleteManager);

module.exports = router;