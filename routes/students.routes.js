const express = require("express");
const router = express.Router();

const {
  getStudents,
  getStudentsById,
  addStudents,
  updateStudent,
  deleteStudent,
} = require("../controllers/student.controllers");

const checkAuth = (req, res, next)=>{
  if(req.headers.token !== "1234567"){
    res.status(401).json({
      message: "Unauthorized Access"
    });
    return ;
  }
  next();
}
router.get("/", checkAuth, getStudents);
router.get("/:id", checkAuth, getStudentsById);
router.post("/", checkAuth, addStudents);
router.patch("/:id", checkAuth, updateStudent);
router.delete("/:id", checkAuth, deleteStudent);

module.exports = router;
