const Manager = require('../models/manager.models');

const getAllManagers = async (req, res) => {
  const filter = { name: new RegExp(req.query.search, 'i') };
  const { limit = 2, page = 1 } = req.query;
  const managers = await Manager.find(filter)
    .limit(limit)
    .skip((page - 1) * limit);

  const total = await Manager.countDocuments(filter);
  res.status(200).json({
    message: 'Fectched data successfully',
    data: managers,
    total,
    page,
    limit,
  });
};

const getManagerById = async (req, res) => {
  const manager = await Manager.findById(req.params.id);
  res.status(200).json({
    message: 'Fectched data successfully',
    data: manager,
  });
};

const deleteManager = async (req, res) => {
  await Manager.deleteOne({ _id: req.body.id });
  res.status(200).json({
    message: 'Delete data successfully',
  });
};

const updateManager = async (req, res) => {
  await Manager.UpdateOne({ _id: req.body.id }, req.body);
  res.status(200).json({
    message: 'Delete data successfully',
  });
};

module.exports = {
  getAllManagers,
  getManagerById,
  deleteManager,
  updateManager,
};
