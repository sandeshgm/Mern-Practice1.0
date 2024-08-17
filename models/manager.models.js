const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    password : String,
    gender : {
        type : String,
        enum : ["male","female"]
    }
},{timestamps: true});

const Manager = mongoose.model("Manager", managerSchema )

module.exports = Manager;