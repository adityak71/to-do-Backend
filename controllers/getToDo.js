//import models
const ToDo = require('../models/todo');

exports.getToDo = async (req,res) => {
    try {
        // fetch all to items from database
        const todos = await ToDo.find({});

        // response update with flags and data
        res.status(200).json({
            success: true,
            data : todos,
            message : "Entire data is fetched"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error : error.message,
            message: "Internal Server Error"
        })
    }
}



exports.getToDoById = async (req, res)=>{
    try {
        // extract to item based on todo
        const id = req.params.id;
        const todo = await ToDo.findById({_id : id});

        // if data not found
        if(!todo){
            return res.status(404).json({
                success: false,
                message : "No data found by given id"
            })
        }


        // if data found
        res.status(200).json({
            success: true,
            data : todo,
            message : `Todo ${id} data successfully found`
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error : error.message,
            message: "Internal Server Error"
        })
    }
}