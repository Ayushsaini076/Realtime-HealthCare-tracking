const app = require("./app");
const socketIo = require('socket.io');
require('dotenv').config();

const server = app.listen(process.env.PORT, () =>
  console.log(`API Server running.. ${process.env.PORT}`)
);

const io = socketIo(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

io.on('connection',(socket)=>{
  console.log('A user connected');

  var room = null;
  socket.on('join-room',(roomId,callback)=>{
    socket.join(roomId);
    room=roomId
    console.log(`User joined room ${roomId}`);
    callback();
  });

  socket.on('signal',(data)=>{
    // console.log(data);
    // console.log(room)
    io.to(room).emit('signal',data);
  });

  socket.on('navigateBack',()=>{
    io.to(room).emit('navigateBack');
  })

  socket.on('disconnect',()=>{
    console.log('User disconnected');
  })
})

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => process.exit(1));
});