// const ProfessionalService = require('../services/professional.services');

// // Enregistrement d'un nouveau professionnel
// exports.registerProfessional = async (req, res, next) => {
//     try {
//         const { email, password, names, surname, speciality, role = 'professionnel' } = req.body;
//         const existingProfessional = await ProfessionalService.checkProfessional(email);
//         if (existingProfessional) {
//             return res.status(400).json({ status: false, error: 'Ce professionnel existe déjà' });
//         }
//         const newProfessional = await ProfessionalService.registerProfessional(email, password, names, surname, speciality, role.toLowerCase());
//         res.status(201).json({ status: true, success: "Professionnel enregistré avec succès", professional: newProfessional });
//     } catch (error) {
//         console.error("Error during professional registration:", error);
//         if (error.code === 11000 && error.keyPattern && error.keyValue) {
//             return res.status(400).json({ status: false, error: 'Adresse e-mail déjà utilisée' });
//         }
//         next(error);
//     }
// };

// // Connexion du professionnel
// exports.loginProfessional = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         const professional = await ProfessionalService.checkProfessional(email);
//         if (!professional) {
//             return res.status(404).json({ status: false, message: "Professionnel inexistant" });
//         }
//         const isMatch = await ProfessionalService.comparePassword(password, professional.password);
//         if (!isMatch) {
//             return res.status(401).json({ status: false, message: "Mot de passe invalide" });
//         }
//         const tokenData = { _id: professional._id, email: professional.email, role: professional.role };
//         const token = await ProfessionalService.generateToken(tokenData, "secretKey", '4h');
//         res.status(200).json({ status: true, token: token, role: professional.role });
//     } catch (error) {
//         console.error("Error during professional login:", error);
//         next(error);
//     }
// };

// // Récupérer le profil du professionnel actuellement connecté
// exports.getProfessionalProfile = async (req, res, next) => {
//     try {
//         const professionalId = req.user._id;
//         const professional = await ProfessionalService.getUserById(professionalId);
//         res.json(professional);
//     } catch (error) {
//         console.error("Error retrieving professional profile:", error);
//         res.status(500).json({ status: false, error: 'Erreur interne du serveur' });
//     }
// };

// // Récupérer toutes les utilisatrices et leurs enfants pour un professionnel de santé
// exports.getUtilisatricesAndChildren = async (req, res, next) => {
//     try {
//         const utilizatrices = await UserService.getAllUtilisatrices();
//         const result = [];
//         for (let utilizatrice of utilizatrices) {
//             const children = await UserService.getChildrenByUtilisatriceId(utilisatrice._id);
//             result.push({ utilizatrice, children });
//         }
//         res.json(result);
//     } catch (error) {
//         console.error("Error retrieving utilizatrices and children:", error);
//         res.status(500).json({ status: false, error: 'Erreur interne du serveur' });
//     }
// };
