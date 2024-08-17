const express = require("express");
const { customerSignUp, customerSignIn } = require("../controllers/customerAuth.comtrollers");
const router = express.Router();

router.post("/customer-sign-up", customerSignUp);
router.post("/customer-sign-in", customerSignIn);

module.exports = router;