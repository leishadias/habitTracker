//used for adding new items into the DB
const db = require('../config/mongoose');
const Todo=require('../models/todo');

module.exports.additem = function(req, res){
    //create document
    Todo.create({
        description: req.body.inputdesc,
        category: req.body.inputcategory,
        date:  req.body.inputdate,
        completed: false //initial value false
    }).then(()=>{
        return res.redirect('back'); //reload the page
    }).catch((err)=>{
        console.log("couldnt add todo list item", err);
        return;
    });
};