'use strict'

const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
require('dotenv').config()
const checkForSession = require('./middleware/checkForSession')
const userCtrl = require('./controllers/userController');

const app = express()
// TOP LEVEL MIDDLEWARE //
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 24 hrs
    }
}))
// // // // //
// CUSTOM MIDDLEWARE //
app.use(checkForSession)
// // // // // 

// ENDPOINTS // 
app.get('/api/user', userCtrl.read)
// // // // //

const PORT = process.env.SERVER_PORT
app.listen(PORT, ()=> console.log('0,0 listenin on the port : ' + PORT))