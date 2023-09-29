# habitTracker

Name: Leisha Aloma Dias

Linkedin: www.linkedin.com/in/leisha-dias

Hosted Link: 

## Problem statement

Create a habit tracker app, where we can define habits and track them. Create a fullstack app with Nodejs and Ejs

### Description

A full stack app, in which a user can track one's daily habits.
The user can create, delete or edit this habit.
It shows the progress of past one week and the number of days this has been completed.

## Features
- Add multiple habits to track like reading a book, going to the gym etc.
- Track each habit everyday. These are the 3 statuses of a habit:
  - Done - Mark the habit as done for a day.
  - Not done - Mark the habit as not done for a day.
  - None - User did not take any action on a habit for a day.
- A view to show all current habits.
- An 'add button' where you can add a new habit to track. 
- A view to display 7 days of each habit.
- Option to mark status of the habit.
- A user can toggle between the three statuses of a habit i.e. done, not done or none anytime.
- User is able to change any of the previous days status i.e. change the status of a habit for yesterday, day before yesterday or any previous 6 days as well.
- A sign in/ sign up page.
- Data stored in a DB.
- The number of days the user completed that habit since the user created the habit.


## Languages, Frameworks and Tech stack used
- This project was made using HTML, CSS and Javscript.
- Additional framework like bootstrap was used as well.
- Node , Express, Mongodb , EJS was used as well.

### How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.

Run the following commands.
   ```` 
        npm install 
        npm start || npm run prod_start
   ````



### Features
  
  # Sign-Up
  

  # Sign-In
  

  # Home Page (Before sign-in)
  
  
  # Home Page (On sign-in)


  # Habits menu
  

  # Habits (daily view)
  

  # Habits (weekly view)
  

  # Add new habit
  
  
  # Edit habit
  
  
  # Different habit statuses
  
  

### Folder Structure

```
Employee Review System
    |
    |               |--->css
    |--->assets---->|--->images
    |               |--->javascript
    |
    |               |--->environment.js
    |--->config---->|--->middleware.js
    |               |--->mongoose.js
    |               |--->passport-local-strategy.js
    |
    |                  |-->habit_controller.js
    |--->controllers-->|-->home_controller.js
    |                  |-->users_controller.js
    |
    |--->models---->|-->habit.js
    |               |-->user.js
    |
    |-->node_modules
    |
    |-->production_logs
    |
    |               |-->habit.js
    |--->routes---->|-->index.js
    |               |-->users.js
    |
    |              |--->_add_item_form.ejs
    |              |--->_edit_habit.ejs
    |              |--->_habits.ejs
    |              |--->_header.ejs
    |--->views---->|--->_weekly_view.ejs
    |              |--->home.ejs
    |              |--->layout.ejs
    |              |--->user_sign_in.ejs
    |              |--->user_sign_up.ejs
    |
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
    ````
