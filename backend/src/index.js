const app = require("./server.js"); //Runs server
const env = require("dotenv");  //Allows pulling information from .env with process.env
const mongoose = require('mongoose');
const taskDAO = require("./dao/taskDAO.js"); //Accesses the task information

env.config(); //Configure .env
const port = process.env.PORT || 2000;

const connect = async () => {
    //Replace connect() with the db connect method for mongoose 
}
connect().catch(err =>{
    console.error(err.stack)
    process.exit(1)
}).then(async client =>{
    await taskDAO.injectDB(client);
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
});
