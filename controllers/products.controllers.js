const Product = require("../models/products.models");

const addProducts = async (req, res) => {
  try {
    await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      rating: req.body.rating,
      manager: req.managerAuth._id,
    });
    res.status(201).json({
      message: "Data Added successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error detected, Adding Data",
      data: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Data retrieve successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deteted, Retrieving Data",
      data: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      message: "Data retrieve successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
        message: "Error detected, getting data by id",
        data : error.message
    })
  }
};

const updateProduct = async (req, res) => {
    try {
        await Product.updateOne({_id: req.params.id},req.body);
        res.status(200).json({
            message: "Update data successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error detected, updating data",
            data: error.message,
        })
    }
}

const deleteProduct = async (req, res) =>{
    try {
        await Product.deleteOne({_id : req.params.id});
        res.status(200).json({
            message: "Deleting data successfully",
        });
    } catch (error) {
        res.status(400).json({
            message: "Error detected, Deleting data!!!",
            data: error.message,
        });
    }
}

module.exports = {
  addProducts,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct
};
