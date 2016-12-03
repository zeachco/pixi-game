const server = require('http').createServer();
const url = require('url');
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({server: server});
const express = require('express');
const app = express();
const config = require('../config/server');

app.use(express.static('build'));

wss.on('connection', function connection(ws) {
    const location = url.parse(ws.upgradeReq.url, true);
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    ws.send('something');

    setInterval(() => {
        ws.send(''+Date.now());
    }, 1000);
});

server.on('request', app);
server.listen(config.port, function () {
    console.log('Listening on ' + server.address().port)
});