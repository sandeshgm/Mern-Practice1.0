const Manager = require("../models/manager.models");

const getAllManagers = async (req, res) => {
  try {
    const managers = await Manager.find();
    res.status(200).json({
      message: "Fectched data successfully",
      data: managers,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error detected, fecthing data!!!",
      data: error.message,
    });
  }
};

const getManagerById = async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id);
    res.status(200).json({
      message: "Fectched data successfully",
      data: manager,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error detected, fecthing data!!!",
      data: error.message,
    });
  }
};

const deleteManager = async (req, res) => {
  try {
    await Manager.deleteOne({ _id: req.body.id });
    res.status(200).json({
      message: "Delete data successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error detected, deleting data!!!",
      data: error.message,
    });
  }
};

const updateManager = async (req, res) => {
  try {
    await Manager.UpdateOne({ _id: req.body.id }, req.body);
    res.status(200).json({
      message: "Delete data successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Error detected, deleting data!!!",
      data: error.message,
    });
  }
};

module.exports = {
  getAllManagers,
  getManagerById,
  deleteManager,
  updateManager
};
