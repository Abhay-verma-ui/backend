import mongoose from "mongoose";

export const dbconnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "AXIS_HOSPITAL_SYSTEM"
    })
    .then(()=>{
        console.log("connected to database!")
    })
    .catch(err=>{
        console.log(`Some error occured while connecting to database: ${err}`);
    });
}; 
