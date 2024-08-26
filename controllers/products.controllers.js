const Product = require('../models/products.models');

const addProducts = async (req, res) => {
  console.log(req.managerAuth);
  await Product.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    rating: req.body.rating,
    manager: req.managerAuth._id,
  });
  res.status(201).json({
    message: 'Data Added successfully',
  });
};

const getProduct = async (req, res) => {
  
  const filter = { name: new RegExp(req.query.search, 'i') };
  if (req.query.minPrice && req.query.maxPrice) {
    filter.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
  }
  const { page = 1, limit = 2 } = req.query;
  const sortByFilter = {};
  if (req.query.order) {
    sortByFilter.price = req.query.order;
  }
  const products = await Product.find(filter)
    .sort(sortByFilter)
    .limit(limit)
    .skip((page - 1) * limit);

  const total = await Product.countDocuments(filter);

  res.status(200).json({
    message: 'Data retrieve successfully',
    data: products,
    total,
    page,
    limit,
  });
};

const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).json({
    message: 'Data retrieve successfully',
    data: product,
  });
};

const updateProduct = async (req, res) => {
  await Product.updateOne({ _id: req.params.id }, req.body);
  res.status(200).json({
    message: 'Update data successfully',
  });
};

const deleteProduct = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.status(200).json({
    message: 'Deleting data successfully',
  });
};

module.exports = {
  addProducts,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
