const express = require('express');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        enum: ["male","female"]
    },
    admin : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Principle"
    } 
},{timestamps: true}
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;