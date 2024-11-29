// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const { Schema } = mongoose;

// const professionalSchema = new Schema({
//     email: {
//         type: String,
//         lowercase: true,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     names: {
//         type: String,
//         required: true
//     },
//     surname: {
//         type: String,
//         required: true
//     },
//     speciality: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         enum: ['professionnel'],
//         default: 'professionnel'
//     }
// }, { timestamps: true });

// professionalSchema.pre('save', async function (next) {
//     try {
//         if (!this.isModified('password')) return next();
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (error) {
//         console.error("Error hashing password:", error);
//         next(error);
//     }
// });

// professionalSchema.methods.comparePassword = async function (userPassword) {
//     try {
//         return await bcrypt.compare(userPassword, this.password);
//     } catch (error) {
//         console.error("Error comparing password:", error);
//         throw error;
//     }
// };

// const ProfessionalModel = mongoose.model('Professional', professionalSchema);
// module.exports = ProfessionalModel;
