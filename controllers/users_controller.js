const User = require('../models/user');

//signup page loading
module.exports.signup = function(req, res){
    try {
        return res.render('user_sign_up', {
            title:"Habit Tracker | Sign up"
        });
    } catch (error) {
        console.log('Error in signUp: ', error);
        return res.redirect('back');
    }
};

//signin page loading
module.exports.signin = function(req, res){
    try {
        
        return res.render('user_sign_in', {
            title: "Habit Tracker | Sign In"
        });
    } catch (error) {
        console.log('Error in signIn: ', error);
        return res.redirect('back');
    }
};

//sign in user/ create session
module.exports.createSession = function(req, res){
    req.flash('success', 'log in success');
    return res.redirect('/');
};

//create new user
module.exports.create = async function(req, res){
    try{
        //check is password and confirm password is same
        if (req.body.password != req.body.confirmPassword){
            req.flash('error', 'Confirmation password incorrect');
            return res.redirect('back');
        }
        //check if account already exists
        let user = await User.findOne({email: req.body.email});
        if (!user){
            //create new user
            user = await User.create(req.body);
            //send welcome mail to user
            req.flash('success', 'Account created successfully');
            return res.redirect('/users/sign-in');
        }else{
            req.flash('error', 'Account already exists');
            return res.redirect('back');
        }
    }catch(err){
        req.flash('error', err);
        return res.redirect('back');
    }
};

//sign out/destroy session
module.exports.destroySession=function(req, res){
    try{
        req.logout(function(err) {
            if (err) { return next(err); }
        });
        req.flash('success', 'Logged Out Successfully');
        return res.redirect('/users/sign-in');
    }catch(err){
        req.flash('error', err); 
        return res.redirect('back');
    }
}