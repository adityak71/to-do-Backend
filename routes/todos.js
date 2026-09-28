const express = require('express');
const router = express.Router();


const {createToDo} = require('../controllers/createToDo');
const {getToDo, getToDoById} = require('../controllers/getToDo')


router.post("/createtodos",createToDo);
router.get("/gettodos",getToDo);
router.get("/gettodo/:id",getToDoById);



module.exports = router;
