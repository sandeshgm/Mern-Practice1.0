const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/constants");

const checkAuth = async (req, res, next) => {
  const { token } = req.headers;
  try {
    const student = jwt.verify(token, JWT_SECRET_KEY);
    req.authStudent = student;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized Access",
    });
  }
};

module.exports = checkAuth;
