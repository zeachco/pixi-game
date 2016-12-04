
console.log('socket?')

const port = require('../../../shared/server').port;
// const user = require('../shared/UserConnection');

function debug(message) {
    console.log(message);
}

initConnect();

function initConnect() {
    const socket = new WebSocket('ws://127.0.0.1:' + port)
    socket.onopen = onOpen
    socket.onmessage = debug
    socket.onclose = onClose

    function onOpen() {
        const path = /[^\/]+$/.exec(window.location.href);
        console.log('asking server to create ' + path);
        socket.send('SET_NAME ' + path);

        window.addEventListener('click', ev => {
            socket.send(`SET_POS ${ev.layerX} ${ev.layerY}`);
        });
    }

    function onClose() {
        console.warn('got disconnected, will try again in 5 seconds')
        setTimeout(initConnect, 5000)
    }
}