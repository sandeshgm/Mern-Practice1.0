const Student = require("../models/student.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/constants");

const signUp = async (req, res) => {
  try {
    const { password, ...remaining } = req.body;
    const student = await Student.findOne({ email: req.body.email });
    if (student) {
      res.status(401).json({
        message: "User already Exit",
      });
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    await Student.create({
      ...remaining,
      password: hashPassword,
    });
    res.status(200).json({
      message: "Sign Up successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error Detected SignUp",
    });
  }
};

const signIn = async (req, res) => {
  const student = await Student.findOne({ email: req.body.email });

  if (!student) {
    res.status(404).json({
      message: "Invalid Credentials",
    });
    return;
  }

  const isValidPassword = bcrypt.compareSync(
    req.body.password,
    student.password
  );

  if (isValidPassword) {
    const token = jwt.sign(
      {
        _id: student._id,
        name: student.name,
        email: student.email,
      },
      JWT_SECRET_KEY,
      {
        expiresIn: "2days",
      }
    );
    res.status(200).json({
      message: "Successsfully sign in",
      token,
    });
    return;
  }
  res.status(400).json({
    message: "Error Detected SignIn",
    data: error.message,
  });
};

module.exports = {
  signUp,
  signIn,
};
