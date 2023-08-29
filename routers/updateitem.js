const express=require('express');
const router = express.Router();
const updateitemController = require('../controllers/updateitem_controller.js');

router.get('/update-item/', updateitemController.updateitem);

module.exports=router;