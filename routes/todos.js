const express = require('express');
const router = express.Router();


const {createToDo} = require('../controllers/createToDo');
const {getToDo, getToDoById} = require('../controllers/getToDo')
const {updateToDo} = require('../controllers/updateToDo');
const { deleteToDo } = require('../controllers/deleteToDo');

router.post("/createtodos",createToDo);

router.get("/gettodos",getToDo);

router.get("/gettodo/:id",getToDoById);

router.put("/updatetodo/:id",updateToDo);

router.delete("/deletetodo/:id",deleteToDo);



module.exports = router;
