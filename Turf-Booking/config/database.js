import mongoose from "mongoose";
import 'dotenv/config';

// console.log(process.env.Db);

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.Db)
        console.log("MogoDb Connected");
    } catch (error) {
        console.error("error connecting to db",error)
    }
}


export default connectDB;