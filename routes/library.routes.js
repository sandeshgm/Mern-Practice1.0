const express = require('express');
const { getBooks, getBooksById, addBook, updateBook, deleteBook } = require('../controllers/library.controllers');
const checkAuth = require('../middleware/check-auth.middleware');
const router = express.Router();


router.get("/",checkAuth, getBooks);
router.get("/:id", checkAuth, getBooksById);
router.post("/", checkAuth, addBook);
router.patch("/:id", checkAuth, updateBook);
router.delete("/:id", checkAuth, deleteBook);


module.exports = router;