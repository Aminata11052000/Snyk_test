const mongoose = require('mongoose');
const db = require('../config/db');

const { Schema } = mongoose;

const childSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Référence à l'utilisateur (mère ou utilisatrice)
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    vaccination: {
        type: String // Suppose que c'est une chaîne de caractères, ajustez si nécessaire
        // required: true
    },
    description: {
        type: String // Suppose que c'est une chaîne de caractères, ajustez si nécessaire
        // required: true
    }
});

const ChildModel = db.model('Child', childSchema);

module.exports = ChildModel;
