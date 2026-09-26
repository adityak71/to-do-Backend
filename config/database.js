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


        //eska kya matlab hota hai find out kro
        process.exit(1);
    })
}




module.exports = dbConnect;