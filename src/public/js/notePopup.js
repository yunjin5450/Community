const socket = io();

const receiver = document.querySelector("#receiveNickname");
const title = document.querySelector('#title');
const content = document.querySelector('#content');
const sendButton = document.querySelector('#send');

function sendMessage() {
    socket.emit("receive Message")
}

