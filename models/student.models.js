const express = require('express');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
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
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male","female"]
    }  
},{timestamps: true}
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;