var express = require('express');
var session = require('cookie-session');
//load the piece of middleware for sessions
var bodyParser = require ('body-parser');
//loads the piece of middleware for managing the setting
var urlencodedParser = bodyParser.urlencoded({ extended: false
                                             });
var app=express();


/*Using sessions  */

app.use(session({secret:
                'todotopsecret''}))
/* if there is no to do list in the session,
  we create an empty one in the form of an array before counting */
                 
                 app.use(function(req.session))
                 