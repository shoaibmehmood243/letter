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
});

let users = [];

socketIO.on('connection', (socket) => {
    // chat message
    socket.on('chat message', (data) => {
        // response for all messages
        socketIO.emit('messageResponse', data);
    });

    // when user typing
    socket.on('typing', (data)=> socket.broadcast.emit('typingResponse', data));

    // listens when a user joins
    socket.on('newUser', (data) => {
        users.push(data);
        // sends/emits the users
        socketIO.emit('newUserResponse', users);
    })
});

app.get("/", (req, res)=> {
    res.send("Hello from Letter | chat app.");
});

const startServer = () => {
    http.listen(8080, console.log("Server running on port 8080."));
}

startServer();