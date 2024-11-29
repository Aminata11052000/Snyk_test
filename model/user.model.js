const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    names: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age: {
        type: Number
        // required: true
    },
    status_marital: {
        type: String,
        required: true
    },
    antecedents_medicaux: {
        type: String
    },
    allergies: {
        type: String
    },
    medicamments: {
        type: String
    },
    role: {
        type: String,
        enum: ['Utilisateur','Professionnel'],
        default: 'Utilisateur'
    }
});

userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.comparePassword = async function (userPassword) {
    try {
        return await bcrypt.compare(userPassword, this.password);
    } catch (error) {
        throw error;
    }
}

const UserModel = db.model('User', userSchema);

module.exports = UserModel;
