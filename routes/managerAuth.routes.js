const express = require('express');
const { managerSignIn, managerSignUp } = require('../controllers/managerAuth.controllers');
const router = express.Router();

router.post("/manager-sign-up", managerSignUp);
router.post("/manager-sign-in", managerSignIn);

module.exports = router;