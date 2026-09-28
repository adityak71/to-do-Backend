const ToDo = require('../models/todo');

exports.updateToDo = async(req,res)=>{
    try {
        const id = req.params.id;
        const {title , description} = req.body;

        const todo = await ToDo.findByIdAndUpdate(
            {_id : id},
            {title, description, updatedAt : Date.now()}
        )

        const newTodo = await ToDo.findById({_id:id});

        if(!todo){
            return res.status(404).json({
                success : false,
                message: "no data found by this id"
            })
        }

        res.status(200).json({
            success: true,
            oldToDo : todo,
            newTodo : newTodo,
            message: "data updated successfully"
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