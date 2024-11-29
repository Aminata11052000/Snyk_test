const jwt = require('jsonwebtoken');
const UserModel = require('../model/user.model');
const ProfessionalModel = require('../model/professional.model');

const authenticateUser = (roles = []) => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            const decoded = jwt.verify(token, 'secretKey');
            req.user = decoded;

            if (!roles.length || roles.includes(req.user.role)) {
                const user = await (req.user.role === 'professionnel' ? ProfessionalModel : UserModel).findById(req.user._id);
                if (!user) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }
                req.user = user;
                next();
            } else {
                return res.status(403).json({ message: 'Forbidden' });
            }
        } catch (error) {
            console.error('Error authenticating user:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    };
};

module.exports = authenticateUser;
