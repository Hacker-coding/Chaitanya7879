const socket = io('http://localhost:5000');
socket.on("connect",function(){
    console.log("connected")
})
socket.on("message-from-server",function(data){
    document.querySelector(".chat-display").innerHTML+=`<li>${data}</li>`
})
document.querySelector('.btn').addEventListener('click', function(e) {   
    e.preventDefault()
const msg = document.querySelector('.chat-box').value 
socket.emit("message-from-client",msg)
});
console.log(window.location.search)