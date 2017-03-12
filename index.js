const classServer = require('./lib/server.js');
var server = new classServer();
server.configure(5555);
server.start();

module.exports = server;