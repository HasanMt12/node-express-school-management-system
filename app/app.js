const express = require('express');
const morgan = require('morgan');
const {readdirSync} = require('fs')
const path = require('path')

// initialize application
const app = express();

// middleware
app.use(morgan('dev')); // log requests to the console (Express4)

// initialize staff route
const staffPath = path.join(__dirname,'../routes/staff')
readdirSync(staffPath).map(fileName =>app.use('/api/v1',require('../routes/staff/'+fileName)));//why it is giving me error?
// initialize academic route
const academicPath = path.join(__dirname,'../routes/academic')
readdirSync(academicPath).map(fileName =>app.use('/api/v1',require('../routes/academic/'+fileName)));

module.exports=app