const { response } = require("express");
const Ceo = require("../models/ceo.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SUPERADMIN_SECRET_KEY } = require("../config/constants");

const superAdminSignUp = async (req, res) => {
  try {
    const { password, ...remaining } = req.body;
    const superAdmin = await Ceo.findOne({ email: req.body.email });
    if (superAdmin) {
      res.status(401).json({
        message: "Super Admin already exist",
      });
      return;
    }

    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);

    await Ceo.create({
      ...remaining,
      password: hashPassword,
    });
    res.status(200).json({
      message: "Super Admin sing up successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error detected, sign up!!",
      data: error.message,
    });
  }
};

const superAdminSignIn = async (req, res) => {
  try {
    const superAdmin = await Ceo.findOne({ email: req.body.email });
    if (!superAdmin) {
      res.status(401).json({
        message: "Super Admin doesnt exist",
      });
      return;
    }
    const isValidPassword = bcrypt.compareSync(
      req.body.password,
      superAdmin.password
    );
    let token;
    if (isValidPassword) {
      token = jwt.sign(
        {
          name: superAdmin.name,
          age: superAdmin.age,
          email: superAdmin.email,
        },
        JWT_SUPERADMIN_SECRET_KEY,
        {
          expiresIn: "10 days",
        }
      );
      res.status(201).json({
        message: "Super Admin Sign in Successfully",
        token,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error detected, sign in!!!",
      data: error.message,
    });
  }
};

module.exports = {
  superAdminSignUp,
  superAdminSignIn,
};
