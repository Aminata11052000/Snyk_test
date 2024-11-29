const express = require('express');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.router');

const cors = require('cors');

const app = express();

app.use(cors()); // Autorise toutes les origines

app.use(body_parser.json());

app.use('/',userRouter);



// Middleware d'erreur global
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });
  

module.exports = app;

