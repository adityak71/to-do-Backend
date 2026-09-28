const ToDo = require('../models/todo');


exports.deleteToDo = async(req, res)=>{
    try {
        const id = req.params.id;
        const todo = await ToDo.findByIdAndDelete({_id:id});


        if(!todo){
            return res.status(404).json({
                success: false,
                message: "Todo not found by this ID"
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message:"ToDo Deleted Successfully"
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