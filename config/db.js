const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/health').on('open',()=>{
    console.log("CONNECTÉ à MONGODB");
}).on('error',()=>{
    console.log("ERREUR DE CONNECTION A MONGODB");

});


module.exports = connection;