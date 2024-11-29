const router = require('express').Router();
const UserController = require('../controller/user.controller');
const authenticateUser = require('../middleware/auth');

router.post('/registration', UserController.register);
router.post('/login', UserController.login);
router.get('/profile', authenticateUser, UserController.getUserProfile);
router.get('/:id', UserController.getUserById);
router.post('/generate-reset-token', UserController.generateResetToken);
router.post('/reset-password', UserController.resetUserPassword);
router.get('/profile/:id', authenticateUser, UserController.getUserById);

module.exports = router;
