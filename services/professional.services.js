// const ProfessionalModel = require('../model/professional.model');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// class ProfessionalService {
//     static async registerProfessional(email, password, names, surname, speciality, role = 'Professionnel') {
//         try {
//           const createProfessional = new ProfessionalModel({ email, password, names, surname, speciality, role });
//           const salt = await bcrypt.genSalt(10);
//           createProfessional.password = await bcrypt.hash(password, salt);
//           const savedProfessional = await createProfessional.save();
//           console.log("New professional created:", savedProfessional);
//           return savedProfessional;
//         } catch (err) {
//           console.error("Error creating professional:", err);
//           throw err;
//         }
//     }
    


//     static async checkProfessional(email) {
//         try {
//             return await ProfessionalModel.findOne({ email }).select('email password role');
//         } catch (error) {
//             console.error("Error checking professional:", error);
//             throw error;
//         }
//     }

//     static async comparePassword(professionalPassword, hashedPassword) {
//         try {
//             return await bcrypt.compare(professionalPassword, hashedPassword);
//         } catch (error) {
//             console.error("Error comparing password:", error);
//             throw error;
//         }
//     }

//     static async generateToken(data, secret, expiresIn) {
//         try {
//             return jwt.sign(data, secret, { expiresIn });
//         } catch (error) {
//             console.error("Error generating token:", error);
//             throw error;
//         }
//     }

//     static async getUserById(id) {
//         try {
//             return await ProfessionalModel.findById(id).select('-password');
//         } catch (error) {
//             console.error("Error retrieving user by ID:", error);
//             throw error;
//         }
//     }
// }

// module.exports = ProfessionalService;
