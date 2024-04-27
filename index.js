const express = require("express");

const app = express();

const server = require("http").createServer(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(3000, () => {
  console.log("server is running on port :3000");
});
