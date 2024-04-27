const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const server = require("http").createServer(app);
// socket
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("new user connected");

  socket.on("chat", (data) => {
    // console.log(data);
    io.emit("msgShow", data);
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(3000, () => {
  console.log("server is running on port :3000");
});
