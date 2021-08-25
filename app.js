const express= require("express")
const path= require("path")
const  app=express();
const socketIO= require("socket.io")
app.use(express.static(path.join(__dirname, 'public')));


const server=app.listen(5000,function(){
    console.log("server is on")
})
const io = socketIO(server);  
io.on('connect', socket => {
    socket.on("message-from-client",function(data){
        console.log(data)
        io.to(data.room).emit("message-from-server",{data,s_id:socket.id})
    })
    socket.on("join",function(data){
    socket.join(data.room)

    })
}); 

