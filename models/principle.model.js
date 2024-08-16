const mongoose = require('mongoose');

const principleSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email : String,
    password : String
},
{timestamps: true}
);

const Principle = mongoose.model("Principle", principleSchema);

module.exports = Principle;