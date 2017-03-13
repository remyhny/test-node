'use strict'

const Hapi = require('hapi');
const server = new Hapi.Server();
const staticRoutes = require('./routes/static.js');
const Path = require('path');


class Server {
    constructor() {
    }

    configure(port) {
        server.connection({ port: port });
        staticRoutes(server);
    };

    start() {
        server.start((err) => {
            if (err) {
                throw err;
            }
            console.log(`serveur running`)
        })
    };
}


module.exports = Server;