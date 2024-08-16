const { JWT_SECRET_ADMIN_KEY } = require("../config/constants");
const jwt = require('jsonwebtoken');


const checkAdminAuth = async (req, res ,next) => {
    const {token} = req.headers;
    try {
        const admin = jwt.verify(token, JWT_SECRET_ADMIN_KEY);
        req.authAdmin = admin;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Unauthorized access"
        });
    }
};

module.exports = checkAdminAuth;