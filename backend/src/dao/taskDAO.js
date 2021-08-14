const fs = require('fs').promises; //Remove this once database is added, I am using files as examples

let task;
let connected = false;

module.exports = class taskDAO { //Used to get DBInformation
    static async injectDB(conn){ //Create a connection handle
        if (task){
            return; //If the task is already defined, stop
        }
        try{
            //task = database connection
            //
            connected = true;
        } catch (e) {
            console.error(
                `Connection handle error ${e}`
            )
        }
    }
    static async getTask({//Gets the information we need from the connection
        id = 1 //Default id
    } = {}){
        //Add a filter here in the future if needed?
        try{
            //query = {"id": {$eq: filters["id"]}}
            //cursor = await tasks
            //    .find (query)

            //This read a json file as an example until database is added:
            const getData = async () => { 
                let data = await fs.readFile('../config/task.json')
                    .catch((err) => console.error(err));
                task = await JSON.parse(data);
            }
            getData();
            //Ignore all of that because it will be deleted
        } catch (e) {
            console.error(`Unable to query results ${e}`);
            return {task: null, connected, errors: [e]}
        }
        
        try {
            return {task: await task, connected, errors:[]}; //Return a task if one exists
        } catch (e) {
            console.error(`Error, ${e}`)
            return {task: null, connected, errors: [e]} //Return empty object otherwise
        }
    }
}