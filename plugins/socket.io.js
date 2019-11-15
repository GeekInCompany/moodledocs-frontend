import io from 'socket.io-client'

import { remote } from "electron";
import { disconnect } from 'cluster';

const ACCESS_TOKEN = "ACCESS_TOKEN";


//const baseURL = remote.getGlobal('tanlockGlobal').restUrl.replace("http","ws");
const baseURL = "ws://localhost:3000";

const socket = io(`${baseURL}/`);
function initWS() {
    socket.on('disconnect', () => {
        if (socket.doReconnect) {
            console.log("Disconnect, RECONNECT in .5 Sec");
            setTimeout(() => socket.open(), 500);
        } else {
            console.log("Reconnect Forbidden");
        }
    });
    socket.on('connect', function () {
        socket.doReconnect = true;
    });
}

initWS();

export default ({ app }, inject) => {
    inject('socketio', socket);
}