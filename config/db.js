import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();

const mongoUrl = process.env.DB_URL;

const connectDB = () =>{
  mongoose.connect(mongoUrl);
 
}


console.log("data base connected");


export default connectDB;