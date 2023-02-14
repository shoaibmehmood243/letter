const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(express.json());

app.get("/", (req, res)=> {
    res.send("Hello from Letter | chat app.");
});

const startServer = () => {
    app.listen(8080, console.log("Server running on port 8080."));
}

startServer();