const express = require("express");
const router = express.Router();

const {
  getStudents,
  getStudentsById,
  addStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controllers");
const checkAuth = require("../middleware/check-auth.middleware");


router.get("/",  checkAuth, getStudents);
router.get("/:id", checkAuth, getStudentsById);
router.post("/", checkAuth, addStudents);
router.patch("/:id", checkAuth, updateStudent);
router.delete("/:id", checkAuth, deleteStudent);

module.exports = router;
