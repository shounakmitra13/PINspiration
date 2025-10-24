var createError = require('http-errors');
var express = require('express');
var path = require('path');// This imports the built-in Node.js path module. It provides utilities for working with file and directory paths in a cross-platform way.
var cookieParser = require('cookie-parser');//Imports the cookie-parser middleware. It parses incoming cookies from client requests and makes them accessible in req.cookies
var logger = require('morgan');//Imports the morgan middleware, which logs HTTP requests to the console. 
const expressSession=require("express-session")//Imports the express-session middleware, which provides session management for your application. 
var indexRouter = require('./routes/index');//: Imports the router module from the file ./routes/index.js
var usersRouter = require('./routes/users');
const passport = require('passport');//Imports the passport authentication middleware.
require('dotenv').config();//Loads environment variables from a .env file into process.env
/*Modules are imported: These include essential libraries like express, middleware (e.g., cookie-parser), and utility modules (e.g., path).
Middleware and Routes:
Middleware like express-session, cookie-parser, and morgan help handle various aspects of request processing.
Routes from index.js and users.js define specific paths in your application.
Authentication: passport is set up for managing user logins securely.
Environment Configuration: dotenv loads sensitive configuration settings from .env.
*/ 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//Allowing the Session
app.use(expressSession({
  resave:false,
  saveUninitialized:false,
  secret:"hey hey"
}));
//Auth
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Routing
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
