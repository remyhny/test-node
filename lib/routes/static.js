'use strict'

const Inert = require('inert');

module.exports = function (server) {

    server.register(Inert, (err) => { });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'front'
            }
        }
    });
}