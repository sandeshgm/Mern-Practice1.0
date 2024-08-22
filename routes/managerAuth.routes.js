const express = require('express');
const { managerSignIn, managerSignUp } = require('../controllers/managerAuth.controllers');
const signUpValidate = require('../validation/managerSIgnUp.validation');
const router = express.Router();

router.post("/manager-sign-up", signUpValidate, managerSignUp);
router.post("/manager-sign-in", managerSignIn);

module.exports = router;