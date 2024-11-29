const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');

// Routes pour les utilisateurs
router.get('/users', adminController.getAllUsers);
router.get('/users/:id', adminController.getUserById);
router.put('/users/:id', adminController.updateUserById);
router.delete('/users/:id', adminController.deleteUserById);

// Routes pour les utilisatrices
router.get('/utilisatrices', adminController.getAllUtilisatrices);
router.get('/utilisatrices/:userId/children', adminController.getChildrenOfUtilisatrice);

// Routes pour les professionnels de santé
router.get('/healthprofessionals', adminController.getAllHealthProfessionals);
router.get('/healthprofessionals/:id', adminController.getProfessionalById);
router.put('/healthprofessionals/:id', adminController.updateProfessionalById);
router.delete('/healthprofessionals/:id', adminController.deleteProfessionalById);

// Routes pour les enfants
router.get('/children/:id', adminController.getChildrenById);
router.get('/children', adminController.getAllChildren);
router.put('/children/:id', adminController.updateChildrenById);

module.exports = router;
