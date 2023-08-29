const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
router.get('/', homeController.home); //home page
router.post('/additem', require('./additem')); //adding item to list
router.get('/update-item/', require('./updateitem')); //updating/toggling completed status
router.get('/delete-item/', require('./deleteitem')); //deleting items from the list

module.exports=router;