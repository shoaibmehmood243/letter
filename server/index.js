const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const dbConn = require("./src/Utilities/dbConn");

// Routes
const authRoute = require("./src/Routes/auth.routes")

app.use(express.json());
app.use(cors());
app.use(cookieParser());

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

app.use('/auth', authRoute);

// Handle 404 error
app.use((req, res, next) => {
    res.status(404).send('Sorry, the requested URL was not found');
  });
  
  // Handle server errors
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const startServer = async () => {
    try {
        await dbConn(process.env.MONGODB_URL);
        http.listen(8080, console.log("Server running on port 8080."));
    } catch (error) {
        console.log(error);
    }
}

startServer();

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(err.stack);
    http.close(() => {
      process.exit(1);
    });
});