const { env } = require('../environment/enivronment');

module.exports = {
    development: {
        username: env.db.user,
        password: env.db.pass,
        database: env.db.name,
        host: env.db.host,
        port: env.db.port,
        dialect: "postgres",
    },
    test: {
        username: env.db.user,
        password: env.db.pass,
        database: `${env.db.name}_test`,
        host: env.db.host,
        port: env.db.port,
        dialect: "postgres",
    },
    production: {
        username: env.db.user,
        password: env.db.pass,
        database: env.db.name,
        host: env.db.host,
        port: env.db.port,
        dialect: "postgres",
    },
};
