var express = require('express');
var router = express.Router();
var schedulecon =require('../controllers/getmovie');

router.post('/getscedule',schedulecon.getscedule)


module.exports=router;
