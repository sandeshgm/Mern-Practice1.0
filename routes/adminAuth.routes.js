const express = require('express');
const { adminSignUp, adminSignIn } = require('../controllers/admin.controllers');
const router = express.Router();


router.post("/admin-sign-up",adminSignUp);
router.post("/admin-sign-in",adminSignIn);

module.exports = router;