const app = require("./server.js"); //Runs server
const env = require("dotenv");  //Allows pulling information from .env with process.env
const mongoose = require('mongoose');
const taskDAO = ("./dao/taskDAO.js"); //Accesses the task information

env.config(); //Configure .env
const port = process.env.PORT || 2000;

//Connect to database, then
// await taskDAO.injectDB(client)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
