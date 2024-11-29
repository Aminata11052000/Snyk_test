const mongoose = require('mongoose');
const UserModel = require('../model/user.model');
const ChildModel = require('../model/child.model');
const jwt = require('jsonwebtoken');

class UserService {
    static async registerUser(email, password, names, surname, age, status_marital, antecedents_medicaux, allergies, medicamments, role = 'Utilisateur') {
        try {
            const createUser = new UserModel({ email, password, names, surname, age, status_marital, antecedents_medicaux, allergies, medicamments, role });
            console.log("Creating user:", createUser); 
            return await UserModel.create(createUser);
        } catch (err) {
            throw err;
        }
    }
    

    static async checkuser(email) {
        try {
            return await UserModel.findOne({ email }).select('email role');
        } catch (error) {
            throw error;
        }
    }

    static async generateToken(userId, secretKey, jwt_expire) {
        const payload = { id: userId.toString() }; // Assurez-vous que l'ID est une chaîne de caractères
        return jwt.sign(payload, secretKey, { expiresIn: jwt_expire });
    }
    static async getUserById(userId) {
        try {
            if (!mongoose.Types.ObjectId.isValid(userId)) {
                throw new Error('Invalid ObjectId');
            }
            const objectId = new mongoose.Types.ObjectId(userId); // Convertir en ObjectId
            return await UserModel.findById(objectId);
        } catch (error) {
            throw error;
        }
    }

    static async getAllUtilisatrices() {
        try {
            return await UserModel.find({ role: 'Utilisateur' });
        } catch (error) {
            throw error;
        }
    }

    static async getChildrenOfUtilisatrice(userId) {
        try {
            return await ChildModel.find({ user_id: userId });
        } catch (error) {
            throw error;
        }
    }

    static async getAllHealthProfessionals() {
        try {
            return await UserModel.find({ role: 'Professionnel de santé' });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;
