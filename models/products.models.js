const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    description : String,
    availability : String,
    rating : String
},{timestamps : true});

const Customer = mongoose.model("Customer", customerSchema );

module.exports = Customer;