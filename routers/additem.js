const express=require('express');
const router = express.Router();
const additemController = require('../controllers/additem_controller');

router.post('/additem', additemController.additem);

module.exports=router;