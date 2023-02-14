const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const http = require("http").Server(app);
const cors = require("cors");


app.use(express.json());
app.use(cors());

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://127.0.0.1:5173'
    }
})

socketIO.on('connection', (socket) => {
    console.log(`a user with id: ${socket.id} connected`);
    socket.emit('connection', socket.handshake.time)
});

app.get("/", (req, res)=> {
    res.send("Hello from Letter | chat app.");
});

const startServer = () => {
    http.listen(8080, console.log("Server running on port 8080."));
}

startServer();