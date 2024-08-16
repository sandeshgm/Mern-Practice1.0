const express = require("express");
const router = express.Router();

const {
  getStudents,
  getStudentsById,
  addStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controllers");

router.get("/", getStudents);
router.get("/:id", getStudentsById);
router.post("/",addStudents);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
