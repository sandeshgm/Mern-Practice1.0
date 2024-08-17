const express = require('express');
const { superAdminSignUp, superAdminSignIn } = require('../controllers/ceoAuth.controllers');
const router = express.Router();

router.post("/superAdmin-sign-up", superAdminSignUp);
router.post("/superAdmin-sign-in", superAdminSignIn);

module.exports = router;