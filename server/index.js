const server = require('http').createServer();
const url = require('url');
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({server: server});
const express = require('express');
const app = express();
const config = require('../shared/server');
const UserConnection = require('../shared/UserConnection');

app.use(express.static('build'));

const VERBS = {
    SET_NAME: function (name) {
        this.name = name;
    },
    SET_POS: function (x, y) {
        this.x = x;
        this.y = y;
        UserConnection.broadcast(`PLACE_USER ${this.name} ${x} ${y}`);
    },
    GET_INFO: function (name) {
        this
            .ws
            .send(this.name)
    }
};

wss.on('connection', registerNewConnection);

function registerNewConnection(websocketHandler) {
    const user = new UserConnection({websocketHandler});
    websocketHandler.on('message', digestMessage.bind(user));

    function digestMessage(message) {
        console.log(message);
        const args = message.split(' ');
        const verb = args.splice(0, 1);
        VERBS[verb].call(this, ...args);
    }

    console.log('users', UserConnection.ALL.length)
}

server.on('request', app);
server.listen(config.port, function () {
    console.log('Listening on ' + server.address().port)
});
