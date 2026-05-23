import mongoose from "mongoose";

const connectDB = () =>{
  mongoose.connect('mongodb://localhost:27017/test');
  console.log("Connected to MongoDB");
}



export default connectDB;