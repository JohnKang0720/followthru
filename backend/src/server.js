const express = require("express"); //Uses express to create a server
const cors = require("cors"); //Uses cors library to avoid dealing with that BS
const task = require("./api/task.route.js"); //Used to get task data
const app = express(); 

app.use(cors()); 
app.use(express.json()); //Json module is used to parse json I guess

app.use("/api/task", task); //If using that link, send to task object
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}));

module.exports = app; //Export server for use in index.js
