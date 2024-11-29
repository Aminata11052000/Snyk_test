const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');
const AdminModel = require('./model/admin.model');
const ChildModel = require('./model/child.model');
const ProfessionalModel = require('./model/professional.model');
const userController = require('./controller/user.controller');

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.post('/register', userController.register);

app.listen(port, () => {
    console.log('LE SERVEUR ECOUTE SUR LE PORT http://localhost:' + port);
});
