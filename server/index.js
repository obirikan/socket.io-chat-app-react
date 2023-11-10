const express=require('express')
const http = require("http");
const app=express()
const {Server}=require('socket.io')
const cors=require('cors')
app.use(cors())
//must add a .env file to it and a Procfile (hosting)

const server=http.createServer(app)

//allows communication with frontend 
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });
//io listens

  io.on('connection',(socket)=>{
      console.log(socket.id)

      socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
      });

      socket.on("send_msg",(data)=> {
      socket.to(data.room).emit('recieve_msg',data);
      });

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
  })


//using http to listen to port
server.listen(3001, () => {
    console.log("SERVER RUNNING");
  });
