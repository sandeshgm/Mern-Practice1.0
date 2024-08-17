const jwt = require('jsonwebtoken');
const { JWT_SUPERADMIN_SECRET_KEY } = require('../config/constants');

const checkSuperAdmin = async (req, res, next) =>{
    const { token } = req.headers;
    try {
        const admin = jwt.verify(token, JWT_SUPERADMIN_SECRET_KEY);
        req.superAdmin = admin;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Unauthorized access"
        })
    }
}

module.exports = checkSuperAdmin;