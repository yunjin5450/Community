const socket = io();

const sendMessage = document.getElementById('sendMessage');

function showPopup(){
    window.open("notePopup", "a", "width=600, height=700, left=100, top=50")
}

function sendNote() {
    showPopup();
}

sendMessage.addEventListener("click", sendNote)

