const express = require('express');
const router = express.Router();


const {createToDo} = require('../controllers/createToDo');


router.post("/createtodos",createToDo);



module.exports = router;
