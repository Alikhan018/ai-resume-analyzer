const { User } = require("../../../models/user.model")

class AuthService {
    async register(userData) {
        const { email, password } = userData;
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            throw new Error("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        return await User.create({ ...userData, password: hashedPassword });
    }
    async login(email, password) {
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error("Invalid email or password");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid email or password");
        }
        return user;
    }
}

module.exports = AuthService;