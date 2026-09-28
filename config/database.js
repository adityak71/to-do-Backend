const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("db connected successfull");
    })
    .catch((error)=>{
        console.log("Error while connecting to database");
        console.error(error.message);


        //forcefully terminate the application if db connection fails
        process.exit(1);
        // because of db we cannot run the application, so we are terminating the application forcefully
    })
}




module.exports = dbConnect;