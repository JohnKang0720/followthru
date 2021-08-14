let task;

module.exports = class taskDAO { //Used to get DBInformation
    static async injectDB(conn){ //Create a connection handle
        if (task){
            return; //If the task is already defined, stop
        }
        try{
            //task = database connection
            throw 'MongoDB hasnt been added';
            //
        } catch (e) {
            console.error(
                `Connection handle error`
            )
        }
    }
    static async getTask({//Gets the information we need from the connection
        id = 1 //Default id
    } = {}){
        //Add a filter here in the future if needed?
        try {
            return {task}; //Return a task if one exists
        } catch (e) {
            console.error(`Error, ${e}`)
            return {} //Return empty object otherwise
        }
    }
}