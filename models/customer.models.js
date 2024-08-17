const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name : String,
    address : String,
    phoneNumber : Number,
    email : String,
    password : String
},{timestamps : true});

const Customer = mongoose.model("Customer", customerSchema );

module.exports = Customer;