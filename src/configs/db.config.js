const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ai-resume-analyzer', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log,
    port: 5432
});

module.exports = sequelize;
