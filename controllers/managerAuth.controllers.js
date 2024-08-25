const Manager = require('../models/manager.models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_MANAGERADMIN_SECRET_KEY } = require('../config/constants');

const managerSignUp = async (req, res) => {
  const { password, ...remaining } = req.body;
  const manager = await Manager.findOne({ email: req.body.email });
  if (manager) {
    res.status(401).json({
      message: 'Manager admin already exist',
    });
    return;
  }
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  await Manager.create({
    ...remaining,
    password: hashPassword,
  });
  res.status(200).json({
    message: 'Admin sign up Successfully',
  });
};

const managerSignIn = async (req, res) => {
  const manager = await Manager.findOne({ email: req.body.email });
  if (!manager) {
    res.status(401).json({
      message: 'Manager Admin doesnot exist',
    });
    return;
  }
  const isValidPassword = bcrypt.compareSync(
    req.body.password,
    manager.password
  );
  let token;
  if (isValidPassword) {
    token = jwt.sign(
      {
        _id: manager._id,
        name: manager.name,
        email: manager.email,
      },
      JWT_MANAGERADMIN_SECRET_KEY,
      {
        expiresIn: '10 days',
      }
    );
    res.status(201).json({
      message: 'Manager Admin Sign-in Successfully',
      token,
    });
  }
};

module.exports = {
  managerSignUp,
  managerSignIn,
};
