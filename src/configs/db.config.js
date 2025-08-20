const { Sequelize } = require('sequelize');
const { env } = require('../environment/enivronment');

const sequelize = new Sequelize(env.db.name, env.db.user, env.db.pass, {
    host: env.db.host,
    dialect: 'postgres',
    logging: console.log,
    port: env.db.port
});

module.exports = sequelize;
