const express = require("express");
const EventEmitter = require("events");
const event = new EventEmitter();
const app = express();

let count = 0;
event.on("countApi", () => {
  count++;
  console.log("Api called", count);
});

app.get("", (req, resp) => {
  resp.send("<h1>Api called !</h1>");
  event.emit("countApi");
});

app.listen(3000, () => {
  console.log("application is running !");
});
