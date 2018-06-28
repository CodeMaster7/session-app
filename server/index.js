"use strict";

const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
require("dotenv").config();
const checkForSession = require("./middleware/checkForSession");
const userCtrl = require("./controllers/userController");
const messageCtrl = require("./controllers/messagesController");
const isUserLoggedIn = require("./middleware/isUserLoggedIn");

const app = express();

// TOP LEVEL MIDDLEWARE //
app.use(express.static(__dirname + "/../build"));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 // 24 hrs
    }
  })
);
// // // // //
// CUSTOM MIDDLEWARE //
app.use(checkForSession);
// // // // //

// AUTH ENDPOINTS //
app.get("/api/user", userCtrl.read);
app.post("/api/login", userCtrl.login);
app.post("/api/register", userCtrl.register);
app.get("/api/logout", userCtrl.logout);
// // // // //
// MESSAGE ENDPOINTS //
app.get("/api/messages", isUserLoggedIn, messageCtrl.read);
app.post("/api/message", isUserLoggedIn, messageCtrl.create);
// // // // //

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => console.log("0,0 listenin on the port : " + PORT));
