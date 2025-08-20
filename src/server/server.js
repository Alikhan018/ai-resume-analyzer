const express = require('express');
const DBConnection = require('../database/connection');
const { env } = require('../environment/enivronment');

class Server {
    constructor() {
        this.port = env.app.port;
        this.host = env.app.host;
        this.app = express();
        this.dbConnection = new DBConnection();
        this.start();
        this.routes();
        this.connectToDatabase();
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });
    }

    async connectToDatabase() {
        await this.dbConnection.connect();
    }

    start() {
        this.app.listen(this.port, this.host, () => {
            console.log(`Server is running at http://${this.host}:${this.port}`);
        });
    }
}

module.exports = Server;
