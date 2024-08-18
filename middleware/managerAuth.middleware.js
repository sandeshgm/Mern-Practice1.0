const jwt = require("jsonwebtoken");
const { JWT_MANAGERADMIN_SECRET_KEY } = require("../config/constants");

const managerAuth = async (req, res, next) => {
  const { token } = req.headers;
  try {
    const manager = jwt.verify(token, JWT_MANAGERADMIN_SECRET_KEY);
    // console.log(manager);
    req.managerAuth = manager;
    next();
  } catch (error) {
    res.status(401).json({
      message: "Unauthorized access",
    });
  }
};

module.exports = managerAuth;
