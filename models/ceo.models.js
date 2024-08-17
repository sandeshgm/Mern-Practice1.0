const mongoose = require('mongoose');

const ceoSchema = new mongoose.Schema({
    name : String,
    age : Number,
    email :String,
    password: String,
    gender: {
        type : String,
        enum : ["male","female"]
    }
},{timestamps: true});

const Ceo = mongoose.model("Ceo", ceoSchema);
module.exports = Ceo;