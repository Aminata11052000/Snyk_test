// child.routes.js
const express = require('express');
const router = express.Router();
const ChildController = require('../controllers/child.controller');

// Route pour récupérer les détails d'un enfant
const childDetailsRoute = '/childDetails/:childId'; // Ajout de l'identifiant de l'enfant dans l'URL
router.get(childDetailsRoute, ChildController.getChildDetails);

module.exports = router;
