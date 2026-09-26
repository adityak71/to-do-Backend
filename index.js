const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000
const dbConnect = require('./config/database');
const todoRoutes = require('./routes/todos');



app.use(express.json());




app.use("/api/v1", todoRoutes);








app.listen(PORT,()=>{
    console.log("Server running at Port: ", PORT);
})


//connect to db
dbConnect();



//default route mindatory 
app.get("/",(req,res)=>{
    res.send("Server is Running Okay");
})
