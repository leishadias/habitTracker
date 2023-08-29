const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    category:{
        type:String
    },
    date:{
        type:String
    },
    status: [{
        date: String,
        complete: String
    }]
    },
    { timestamps: true }
);
const Habit = mongoose.model('Habit', habitSchema);
module.exports=Habit;