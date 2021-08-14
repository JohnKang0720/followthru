const taskDAO = require("../dao/taskDAO.js"); //Used to send data to DAO
module.exports = class taskController { //Pulls user data and sends to DAO
    static async apiGetTask(req, res, next){
        //Get request route function
        const id = req.query.id; //Get id from request
        const {task, connected, errors} = await taskDAO.getTask({id}) //Get task info from DAO
        if (task){
            var success = true;
        }else{
            var success = false;
        }
        let response = {
            success: success,
            connected: connected,
            errors: errors,
            //status: 200,
            response:  {
                task: task
            }
        }
        res.json(response) //Responds with response object
    }
}