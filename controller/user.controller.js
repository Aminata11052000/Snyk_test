const UserService = require('../services/user.services');
const UserModel = require('../model/user.model');

exports.register = async (req, res, next) => {
    try {
        const { email, password, names, surname, age, status_marital, antecedents_medicaux, allergies, medicamments, role } = req.body;

        console.log("Request body:", req.body);

        const existingUser = await UserService.checkuser(email);
        if (existingUser) {
            console.log("User already exists:", existingUser);
            return res.status(400).json({ status: false, error: 'Cet utilisateur existe déjà' });
        }

        const successRes = await UserService.registerUser(email, password, names, surname, age, status_marital, antecedents_medicaux, allergies, medicamments, role);
        console.log("User registered successfully:", successRes);
        res.setHeader('Content-Type', 'application/json');

        res.status(200).json({ status: true, message: "Utilisateur enregistré avec succès" });
    } catch (error) {
        // Gérer les erreurs
        console.error("Error during registration:", error);
        res.status(500).json({ status: false, error: "Une erreur s'est produite lors de l'enregistrement de l'utilisateur" });
    }
};

exports.login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      console.log(`Login attempt for email: ${email}`);
      
      // Récupérer l'utilisateur par email
      const user = await UserModel.findOne({ email }).select('+password');
      if (!user) {
        return res.status(404).json({ message: "User doesn't exist" });
      }
      
      console.log("User retrieved for login:", user);
      
      // Comparer le mot de passe
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }
      
      // Ajouter le rôle de l'utilisateur à l'objet user
      user.role = user.role || 'Utilisateur';
      
      // Générer un token (vous devriez mettre "secretKey" dans un fichier de configuration)
      const token = await UserService.generateToken(user._id, "secretKey", '24h');
      res.status(200).json({ status: true, token: token, role: user.role });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "Something went wrong!" });
    }
  };

  exports.getUserProfile = async (req, res, next) => {
    try {
        const userId = req.user.id;
        console.log("User ID:", userId);

        const user = await UserService.getUserById(userId);

        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;

        const user = await UserService.getUserById(userId);

        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.generateResetToken = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await UserService.checkuser(email);
        
        if (!user) {
            throw new Error("User doesn't exist");
        }

        const token = await UserService.generateResetToken(user._id);
        res.status(200).json({ status: true, token: token });

    } catch (error) {
        throw error;
    }
};

exports.resetUserPassword = async (req, res, next) => {
    try {
        const { token, newPassword } = req.body;
        const userId = await UserService.verifyResetToken(token);
        
        if (!userId) {
            throw new Error("Invalid or expired token");
        }

        await UserService.resetUserPassword(userId, newPassword);
        res.status(200).json({ status: true, message: "Password reset successful" });

    } catch (error) {
        throw error;
    }
};
