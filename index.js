const express = require("express");
const cron = require("node-cron");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  res.send("I love kittens!");
});

cron.schedule("* * * * *", function () {
  console.log("running a task every minute");
});

const port = process.env.PORT || 5000;

app.listen(port);
