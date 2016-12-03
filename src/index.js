import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));


const port = require('../config/server').port;

function debug() {
    console.log(arguments);
}

const socket = new WebSocket('ws://127.0.0.1:' + port)
socket.onopen = debug
socket.onmessage = debug
socket.onclose = debug