//used to load the main page
const db = require('../config/mongoose');
const Todo=require('../models/todo');

module.exports.home = function(req, res){
    //fetches all todo list items from the db
    Todo.find({}).then((todoitem)=>{
        // console.log(todoitem);
        res.render('index',{
            listitems:todoitem  
        });
        }).catch((err)=>{
            console.log("couldnt load habit tracker",err);
            return;
    });
}