const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    price : Number,
    description : String,
    availability : String,
    rating : String,
    manager : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Manager"
    }
},{timestamps : true});

const Customer = mongoose.model("Customer", customerSchema );

module.exports = Customer;