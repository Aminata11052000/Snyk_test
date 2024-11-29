// child.services.js
const ChildModel = require('../models/child.model');

class ChildService {
    static async registerChild(userId, name, age, vaccination, description) {
        try {
            // Créer une nouvelle instance de ChildModel avec les données fournies
            const createChild = new ChildModel({ userId, name, age, vaccination, description });
            // Enregistrer l'enfant dans la base de données
            return await ChildModel.create(createChild);
        } catch (error) {
            throw error;
        }
    }

    static async getAllChildren(userId) {
        try {
            // Récupérer tous les enfants associés à un utilisateur spécifique
            return await ChildModel.find({ userId });
        } catch (error) {
            throw error;
        }
    }

    static async getChildDetails(childId) {
        try {
            // Récupérer les détails d'un enfant spécifique par son ID
            return await ChildModel.findById(childId);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ChildService;
