const Habit = require('../models/habit');

module.exports.createHabit = async function(req, res){
    //create document
    const currentDate = await getCurrentDate();
    Habit.create({
        habit: req.body.habit,
        desc: req.body.desc,
        user: req.user._id,
        category: req.body.category,
        date: currentDate,
        streak: 0,
        status : {
            date : currentDate, 
            completed : "none"
        }
    }).then(()=>{
        return res.redirect('/'); //reload the page
    }).catch((err)=>{
        console.log("couldnt add item to habits list", err);
        return;
    });
};

// this function will change the current status of habit
module.exports.toggleStatus = async function(req, res) {
    try {
        let date = req.query.date;
        date=date.replace("+", " ");
        const habit = await Habit.findById(req.query.id);

        if(!habit) {
            console.log('Habit not present!');
            return res.redirect('/');
        }

        // take out the date array of the habit.
        let dates = habit.status;
        let found = false;
        let num =0;
        // changes the complete argument accodingly.
        await dates.find((item, index) =>{
            if(item.date == date){
                if(item.complete === 'y'){
                    item.complete = 'n';
                    num =-1;
                }else if(item.complete === 'n'){
                    item.complete = 'x';
                }else if(item.complete === 'x'){
                    item.complete = 'y';
                    num =1;
                }
                found = true;
            }
        });

        if(!found) {
            await dates.push({date : date, complete : 'y'});
            num=1;
        }
        // at last save the dates.
        habit.status = dates;
        habit.streak +=num;
        
        await habit.save();
        if(req.xhr){
            return res.status(200).json({
                message: "toggled"
            });
        } 
        return res.redirect('/');
        
    } catch (error) {
        console.log('Error', error);
        req.flash('error', err); 
        return res.redirect('back');
    }
}

// this function removes the habit
module.exports.deleteHabit = async function(req, res) {
    try {
        await Habit.deleteOne({
            _id : req.query.id, 
            user: req.user._id
        });
        req.flash('success', 'Habit Deleted Successfully');
        return res.redirect('/');
    } catch (error) {
        console.log('Error', error);
        req.flash('error', err); 
        return res.redirect('back');
    }
}

// this function will edit the habit title/desc
module.exports.editHabit = async function(req, res) {
    try {
        let updatedResult = await Habit.findByIdAndUpdate(
            {
                _id: req.query.id,
                user: req.user._id
            }, {
                habit: req.body.title,
                desc: req.body.desc
            }
        );
        req.flash('success', 'Habit Updated Successfully');
        return res.redirect('/');
        
    } catch (error) {
        console.log('Error', error);
        req.flash('error', err); 
        return res.redirect('back');
    }
}

// used to get current date
function getCurrentDate(){
    var today = new Date();
    let date = today.getDate();
    let month = today.getMonth()+1;

    let fullDate = month + " " + date;
    return fullDate;
}