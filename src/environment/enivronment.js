const dotenv = require('dotenv');

dotenv.config();

const env = {
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
    },
    app: {
        port: process.env.APP_PORT || 5000,
        host: process.env.APP_HOST || 'localhost',
    },
    jwt: {
        secret: process.env.JWT_SECRET,
    },
};

module.exports = { env };
