const express = require('express');
const { getPrinciple, addPrinciple, updatePrinciple } = require('../controllers/principle.controllers');
const router = express.Router();

router.get("/", getPrinciple);
router.post("/", addPrinciple);
router.patch("/:id", updatePrinciple);

module.exports = router;