const socket = io('http://localhost:5000');

var data = parseQueryString(window.location.search
)

if (data.age<=17.9) {
    alert("your age is less than 18")
    window.location.href="/"
}
socket.on("connect",function(){
socket.emit("join",data)
})
socket.on("message-from-server",function(data){
    console.log(data)
    console.log(socket.id==data.s_id)
    if (socket.id==data.s_id) {
        document.querySelector(".chat-display").innerHTML+=`<li class="send"><span class="name">${data.data.name}</span><br>${data.data.msg}</li>`
    }
    else {
        document.querySelector(".chat-display").innerHTML+=`<li class="recev"><span class="name">${data.data.name}</span><br>${data.data.msg}</li>`  
        console.log(data.data.name)
    }
})
document.querySelector('.btn').addEventListener('click', function(e) {   
    e.preventDefault()
const msg = document.querySelector('.chat-box').value 
socket.emit("message-from-client",{msg,...data})
document.querySelector('.chat-box').value= ""
});
console.log(window.location.search)
onEvent("ed", "click", function( ) {
    setProperty("index.html", "background-color", "green");
  });
  