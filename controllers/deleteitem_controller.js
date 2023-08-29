//used to delete all completed tasks
const db = require('../config/mongoose');
const Todo=require('../models/todo');

module.exports.deleteitem = function(req, res){
    //delete multiple - query to find all documents whose completed value is true and delete them
    Todo.deleteMany({completed: true}).then(()=>{
        return res.redirect('back'); //page reloaded
    }).catch((err)=>{
        console.log("couldnt delete list items", err);
        return;
    });
};