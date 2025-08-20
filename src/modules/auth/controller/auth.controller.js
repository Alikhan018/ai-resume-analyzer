const AuthService = require("../service/auth.service");

class AuthController {
    constructor() {
        this.service = new AuthService();
    }
    async register(req, res) {
        try {
            const user = await this.service.register(req.body);
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    async login(req, res) {
        try {
            const user = await this.service.login(req.body.email, req.body.password);
            res.status(200).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = AuthController;