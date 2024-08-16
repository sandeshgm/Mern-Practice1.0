const Student = require("../models/student.models");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    const { password, ...remaining } = req.body;
    const user = await Student.findOne({ email: req.body.email });
    if (user) {
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
  try {
    const user = await Student.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({
        message: "Invalid Credentials",
      });
      return;
    }
    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (isValidPassword) {
      res.status(200).json({
        message: "Successsfully sign in",
        token : "1234567"
      });
      return;
    }
    
  } catch (error) {
    res.status(400).json({
      message: "Error Detected SignIn",
    });
  }
};

module.exports = {
  signUp,
  signIn,
};
