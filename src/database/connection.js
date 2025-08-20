const sequelize = require('../configs/db.config');

class DBConnection {
    async connect() {
        try {
            await sequelize.authenticate();
            console.log('Database connection established successfully.');
        } catch (err) {
            console.error('Database connection error:', err);
        }
    }
}

module.exports = DBConnection;
