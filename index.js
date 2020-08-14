const express = require("express");
const cron = require("node-cron");
const fs = require("fs");
const spawn = require("child_process").spawn;
const myPythonScript = spawn("python", [""]);

const app = express();

app.get("/", (req, res) => {
  res.send("I love kittens!");
});

cron.schedule("* * * * *", function () {
  console.log("running a task every minute");
  myPythonScript.stdout.on("data", (data) => {
    console.log(data);

    // Do something with the data returned from python script
  });
});

const port = process.env.PORT || 5000;

app.listen(port);
