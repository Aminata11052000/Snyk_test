const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.router');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors()); // Autorise toutes les origines
app.use(body_parser.json());
app.use('/', userRouter);

// Configurer EJS comme moteur de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.render('index');
});

// Middleware d'erreur global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;
