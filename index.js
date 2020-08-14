const express = require("express");
const cron = require("node-cron");
const fs = require("fs");
const spawn = require("child_process").spawn;

const app = express();

app.get("/", (req, res) => {
  res.send("I love kittens!");
});

// Commented out and pushed to heroku so no charges?
// cron.schedule("* * * * *", function () {
//   console.log("running a task every minute");
//   const myPythonScript = spawn("python", ["./random_number.py"]);
//   myPythonScript.stdout.on("data", (data) => {
//     console.log("getting here");
//     console.log(data);
//     const cleanData = data.buffer.toString("base64");
//     console.log(cleanData);

//     // Do something with the data returned from python script
//   });
// });

const port = process.env.PORT || 5000;

app.listen(port);
