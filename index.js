const express = require('express');
//fetch environment variables
const env = require('./config/environment');
const logger=require('morgan');
// const path=require('path');
//importing cookie parser
const cookieParser = require('cookie-parser');
const app = express();
// require('./config/view_helpers')(app);
const port = 8000;
//importing express-ejs-layout
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//used for session cookie
const session = require('express-session');
//passport setup
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
//configuring the database
const MongoStore = require('connect-mongo');

const flash= require('connect-flash');
const customMware = require('./config/middleware');

//middleware for form parser
app.use(express.urlencoded());
//middleware for cookie parser
app.use(cookieParser());
//importing the assets folder
app.use(express.static(env.asset_path));
app.use(logger(env.morgan.mode, env.morgan.options));
app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//middleware for passport
app.use(
    session({
      name: 'habitTracker',
      secret: env.session_cookie_key,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 100,
      },
      store: new MongoStore({
        mongoUrl: `mongodb://127.0.0.1:27017/${env.db}`,
        mongooseConnection: db,
        autoRemove: 'disabled',
      }),
    })
);
  
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);
//use express router
app.use('/', require('./router'));
app.listen(port, function(err){
    if (err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server set at port: ${port}`);
});