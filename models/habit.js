const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    habit:{
        type:String,
        required:true
    },
    desc: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category:{
        type:String
    },
    streak:{
        type: Number
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
