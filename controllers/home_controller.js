//used to load the main page
const User = require('../models/user');
const Habit = require('../models/habit');

module.exports.home = async function(req, res){
    //fetches all habits from the db
    try{
        if(req.user){
            let habits = await Habit.find({user: req.user._id}).sort({ createdAt: -1 });
            
            return res.render('home', {
                title : "Habit Tracker",
                habits : habits,
                weeklyDates : await getOneWeekDate()
            })
        }else{
            return res.render('home', {
                title: "Habit Tracker | Home"
            });
        }
    }
    catch(err){
        console.log("couldnt load habit tracker",err);
        return;
    }
}

// used to fetch 7 days of the habit.
function getOneWeekDate(){
    let months = ["","Jan", "Feb", "March", "Apr", "May", "June", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let dates = [];
    for(let i = 6; i>=0 ; i--){
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - i);
        let currMonth = currentDate.getMonth()+1;
        currMonth = months[currMonth];
        let date = currentDate.getDate();
        if (date < 10) date = '0' + date;
        dates.push(currMonth +" " +date);
    }
    return dates;
}