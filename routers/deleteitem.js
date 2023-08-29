const express=require('express');
const router = express.Router();
const deleteitemController = require('../controllers/deleteitem_controller');

router.get('/delete-item', deleteitemController.deleteitem);

module.exports=router;