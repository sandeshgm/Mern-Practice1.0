const Customer = require("../models/customer.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_CUSTOMER_SECRET_KEY } = require("../config/constants");


const customerSignUp = async (req, res) =>{
    try {
        const { password, ...remaining} = req.body;
        const customer = await Customer.findOne({email : req.body.email});
        if(customer){
            res.status(401).json({
                message: "Customer already exist",
            });
            return;
        }
        var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);
    await Customer.create({
        ...remaining,
        password : hashPassword
    });
    res.status(200).json({
        message: "Customer sign up successfully",
      });
    
    } catch (error) {
        res.status(500).json({
            message: "Error detected, sign up!!",
            data: error.message,
          });
    }
};

const customerSignIn = async (req,res) =>{
    try {
        const customer = await Customer.findOne({email : req.body.email});
        if(!customer){
            res.status(401).json({
                message: "Unauthorized access"
            });
            return;
        }
        const isValidPassword = bcrypt.compareSync(req.body.password, customer.password);
        let token;
        if(isValidPassword){
            token = jwt.sign({
                name : customer.name,
                email : customer.email,
                password : customer.password
            }, JWT_CUSTOMER_SECRET_KEY,
        {
            expiresIn : "10 days"
        });
        }
        res.status(200).json({
            message: "Sign Up successfully",
            token,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error detected, sign in!!!",
            data: error.message,
          });
    }
}


module.exports = {
    customerSignUp,
    customerSignIn
}