const Principle = require("../models/principle.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_ADMIN_KEY } = require("../config/constants");

const adminSignUp = async (req, res) => {
  try {
    const { password, ...remaining} = req.body;
    const admin = await Principle.findOne({ email: req.body.email });
    if (admin) {
      res.status(401).json({
        message: "Admin already exsit",
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    await Principle.create({
        ...remaining,
        password: hashPassword
    });
    res.status(200).json({
      message: "Sign up Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error detected, sign up",
      data: error.message,
    });
  }
};

const adminSignIn = async (req, res) => {
    try {
        const admin = await Principle.findOne({email : req.body.email});
        if(!admin){
            res.status(401).json({
                message: "Admin not found"
            });
            return;
        }
        const isValidPass = bcrypt.compareSync(req.body.password, admin.password);
        let token;
        if(isValidPass) {
             token = jwt.sign(
              {
                _id: admin._id,
                email : admin.email,
                password : admin.password
            }, 
            JWT_SECRET_ADMIN_KEY,
            {
                expiresIn : "6 days",
            }
            );
        }
        res.status(200).json({
            message: "Admin Sign in successfully",
            token,
        });
        return ;
        
    } catch (error) {
        res.status(401).json({
            message: "Error detected",
            data: error.message
        });
    }
};

module.exports = {
  adminSignUp,
  adminSignIn
};
