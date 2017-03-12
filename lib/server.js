'use strict'

const Hapi = require('hapi');
const server = new Hapi.Server();



class Server {
    constructor() {
    }

     configure(port) {
        server.connection({ port: port });
    };

    start() {
        server.start((err) => {
            if (err) {
                throw err;
            }
            console.log(`serveur running at : ${server.info.uri}`)
        })
    };
}


module.exports = Server;