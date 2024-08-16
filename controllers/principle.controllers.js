const express = require("express");
const Principle = require("../models/principle.model");

const addPrinciple = async (req, res) => {
  try {
    await Principle.create(req.body);
    res.status(200).json({
      message: "Added successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error detected, adding",
      data: error.message,
    });
  }
};

const updatePrinciple = async (req, res) => {
    try {
        await Principle.updateOne({_id: req.params.id});
        res.status(200).json({
            message: "Update successfully"
        });
    } catch (error) {
     res.status(500).json({
        message: "Error Detected, Updating"
     })   
    }
};

const getPrinciple =async (req, res)=>{
    try {
        const principle = await Principle.find();
        res.staus(200).json({
            message: "Fetched data successfully",
            data: principle
        });
    } catch (error) {
     res.status(500).json({
        message: "Error detected"
     });
    }
};



module.exports = {
  addPrinciple,
  updatePrinciple,
  getPrinciple
};
