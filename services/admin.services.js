const AdminModel = require('../model/admin.model');

class AdminService {
    static async registerAdmin(email, password) {
        try {
            const createAdmin = new AdminModel({ email, password });
            return await AdminModel.create(createAdmin);
        } catch (err) {
            throw err;
        }
    }

    static async getAdminByEmail(email) {
        try {
            return await AdminModel.findOne({ email });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AdminService;
