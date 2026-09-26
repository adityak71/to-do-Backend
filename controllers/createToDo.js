const Todo = require('../models/todo')




//define route handler

exports.createToDo = async (req,res)=>{
    try{
        //extract data from request ki body
        const {title, description} = req.body;

        //create a new todo object into mongodb
        const response = await Todo.create({title,description});
        res.status(200).json({
            success : true,
            data : response,
            message:'Entry Created SuccessFully'
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            seccess: false,
            data: response,
            message :  err.message,
        })
    }
}