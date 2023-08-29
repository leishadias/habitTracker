const express = require('express');
//importing cookie parser
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
//importing express-ejs-layout
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//configuring the database
const MongoStore = require('connect-mongo');

const flash= require('connect-flash');
// const customMware = require('./config/middleware');------------

//middleware for form parser
app.use(express.urlencoded());
//middleware for cookie parser
app.use(cookieParser());
//importing the assets folder
app.use(express.static('./assets'));

app.use(expressLayouts);
//extract style and scripts from sub pages into the layout----------------
// app.set('layout extractStyles', true);---------------
// app.set('layout extractScripts', true);-------------------

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

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