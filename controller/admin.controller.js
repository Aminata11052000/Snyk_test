const UserService = require('../services/user.services');
const UserModel = require('../model/user.model');
const router = require('../routers/user.router');


exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await UserService.getAllUsers();
        console.log("Liste de tous les utilisateurs",users);
        res.json(users);
    } catch (error) {
        console.error("Erreur lors de la récupération de tous les utilisateurs :", error);
        next(error);
    }
};

exports.getAllUtilisatrices = async (req, res, next) => {
    try {
        const utilisatrices = await UserService.getAllUtilisatrices();
        console.log("Liste de toutes les utilisatrices :", utilisatrices);
        res.json(utilisatrices);
    } catch (error) {
        console.error("Erreur lors de la récupération de toutes les utilisatrices :", error);
        next(error);
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await UserService.getUserById(userId);
        console.log("Détails de l'utilisateur avec l'ID", userId, ":", user);
        res.json(user);
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur avec l'ID", userId, ":", error);
        next(error);
    }
};

exports.getProfessionalById = async (req, res, next) => {
    try {
        const professionalId = req.params.id;
        const professional = await UserService.getProfessionalById(professionalId);
        console.log("Details du professionel avec l'ID : ",professionalId, " : ", professional)
        res.json(professional);
    } catch (error) {
        console.log("Erreur lors de la récupération du professionnel avec l'ID : ",professionalId, " : ", error);
        next(error);
    }
};

exports.getChildrenById = async (req, res, next) => {
    try {
        const childId = req.params.id;
        const child = await UserService.getChildrenById(childId);
        console.log("Details du child avec l'ID : ", childId, " : ", child)
        res.json(child);
    } catch (error) {
        console.log("Erreur lors de la récupération du child avec l'ID : ", childId, " : ", error);
        next(error);
    }
};

exports.updateUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const updatedUser = req.body;
        const user = await UserService.updateUserById(userId, updatedUser);
        res.json(user);
    } catch (error) {
        next(error);
    }
};

exports.updateProfessionalById = async (req, res, next) => {
    try {
        const professionalId = req.params.id;
        const updatedProfessional = req.body;
        const professional = await UserService.updateProfessionalById(professionalId, updatedProfessional);
        res.json(professional);
    } catch (error) {
        next(error);
    }
};

exports.updateChildrenById = async (req, res, next) => {
    try {
        const childId = req.params.id;
        const updatedChild = req.body;
        const child = await UserService.updateChildrenById(childId, updatedChild);
        res.json(child);
    } catch (error) {
        next(error);
    }
};

exports.deleteUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        await UserService.deleteUserById(userId);
        console.log(userId);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
};

exports.deleteProfessionalById = async (req, res, next) => {
    try {
        const professionalId = req.params.id;
        await UserService.deleteProfessionalById(professionalId);
        console.log(professionalId);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
};

exports.getAllHealthProfessionals = async (req, res, next) => {
    try {
        const healthProfessionals = await UserService.getAllHealthProfessionals();
        console.log("Liste de tous les professionnels de santé :", healthProfessionals);
        res.json(healthProfessionals);
    } catch (error) {
        next(error);
    }
};

exports.getChildrenOfUtilisatrice = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const children = await UserService.getChildrenOfUtilisatrice(userId);
        console.log("Liste des enfants de l'utilisatrice avec l'ID", userId, ":", children);
        res.json(children);
    } catch (error) {
        next(error);
    }
};

exports.getAllChildren = async (req, res, next) => {
    try {
        const children = await UserService.getAllChildren();
        console.log("Liste de tous les enfants :", children);
        res.json(children);
    } catch (error) {
        next(error);
    }
};
