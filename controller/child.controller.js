// child.controller.js
const ChildService = require('../services/child.services');

// Contrôleur pour récupérer les détails de l'enfant
async function getChildDetails(req, res, next) {
    try {
        // Logique pour récupérer les détails de l'enfant
        const childDetails = await ChildService.getChildDetails(req.params.childId); // Supposons que l'identifiant de l'enfant soit dans les paramètres de la requête

        // Répondre avec les détails de l'enfant au format JSON
        res.status(200).json(childDetails);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getChildDetails,
};
