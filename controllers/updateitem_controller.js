//toggle state of the list items
const db = require('../config/mongoose');
const Todo=require('../models/todo');

module.exports.updateitem = function(req, res){
    const id = req.query.id;
    let prevvalue;
    //find current value of the passed ID, update with its negative
    Todo.find({ _id: id }).then((todoitem)=>{
        prevvalue = todoitem[0].completed; //finding current value
        Todo.updateOne({ _id: id },
            {
                $set:{
                    completed: !prevvalue //updtaing the negative
                }
            }).then(()=>{
                res.redirect('/'); //reloads the page
            }).catch((err)=>{
                console.log("couldnt update todo list item", err);
                return;
            });
    }).catch((err)=>{
        console.log("couldnt fetch todo list item to update",err);
        return;
    });
    
    
};