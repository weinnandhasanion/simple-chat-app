const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  origin: "*",
});
const cors = require("cors");

app.use(cors({ origin: "*" }));
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(8080, () => {
  console.log("listening on *:8080");
});
