const Library = require('../models/library.models');

const getBooks = async (req, res) => {
  const { page=1, limit=2} = req.query;
  const filter = { search : new RegExp(req.query.search)}
  const books = await Library.find()
  .limit(limit)
  .skip((page-1) * limit);

const total = await Library.countDocuments(filter);

  res.status(200).json({
    message: 'Data retrieve successfully',
    data: books,
    total,
  });
};

const getBooksById = async (req, res) => {
  try {
    const book = await Library.findOne(req.params.id);
    res.status(200).json({
      message: 'Data retrieve successfully',
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error detected fetching single data',
      data: error.message,
    });
  }
};
const addBook = async (req, res) => {
  try {
    await Library.create({
      title: req.body.title,
      author: req.body.author,
      publisher: req.body.publisher,
      language: req.body.language,
      pubDate: req.body.pubDate,
      student: req.authStudent._id,
    });
    res.status(201).json({
      message: 'Adding data successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error detected, adding data',
      data: error.message,
    });
  }
};
const updateBook = async (req, res) => {
  try {
    await Library.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({
      message: 'Updated data Successfully',
    });
  } catch (error) {
    res.staus(500).json({
      message: 'Error detected, updating data',
      data: error.message,
    });
  }
};
const deleteBook = async (req, res) => {
  try {
    await Library.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: 'Deleted data successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error detected, deleting data',
    });
  }
};

module.exports = {
  getBooks,
  getBooksById,
  addBook,
  updateBook,
  deleteBook,
};
