const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');
const app = express();

//require file routes


app.use(cors());
app.use(logger('dev'));
mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost/databasename', (err) => {
  if(err) {
    console.log(err);
  }else {
    console.log('Database connect');
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000);

//rest API


module.exports = app;
