const express = require("express");
const router = express.Router();

const {
  getStudents,
  getStudentsById,
  addStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controllers");
const checkAdminAuth = require("../middleware/adminCheck.middleware");



router.get("/",  checkAdminAuth, getStudents);
router.get("/:id", checkAdminAuth,  getStudentsById);
router.post("/", checkAdminAuth, addStudents);
router.patch("/:id", checkAdminAuth, updateStudent);
router.delete("/:id", checkAdminAuth, deleteStudent);

module.exports = router;
