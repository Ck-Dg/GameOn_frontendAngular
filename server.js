//Install express server
const express = require('express');
const path = require('path');

const app = express();

// CORS enabled with express/node-js :
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //ou avec "www.xyz.com" à la place de "*" en production
  res.header("Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, PATCH"); //default: GET, ...
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true")
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE');
    //to give access to all the methods provided
    return res.status(200).json({});
  }
  next();
});

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/front-projet4/eng-CA'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/front-projet4/eng-CA/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
