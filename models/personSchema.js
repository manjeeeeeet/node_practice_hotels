import mongoose from 'mongoose';


const perseonSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
    },
    work : {
        type : String,
        enum : ['chef', 'waiter', 'manager'],
        required : true,
    },
    mobile: {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    address : {
        type : String,
        required : true,
    },
    salary : {
        type : Number,
    }
})

const person = mongoose.model('person', perseonSchema);
export default person;