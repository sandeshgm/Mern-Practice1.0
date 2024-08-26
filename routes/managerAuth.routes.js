const express = require('express');
const {
  managerSignIn,
  managerSignUp,
} = require('../controllers/managerAuth.controllers');
const managerSignUpValidate = require('../validation/managerSIgnUp.validation');
const managerSIgnInValidate = require('../validation/managerSignIn.validation');
const router = express.Router();

router.post('/manager-sign-up', managerSignUpValidate, managerSignUp);
router.post('/manager-sign-in', managerSIgnInValidate, managerSignIn);

module.exports = router;
