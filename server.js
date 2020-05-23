let express = require("express");

let PORT = process.env.PORT || 8001;

// let app = express();

// var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!'); // This will serve your request to '/'.
});

app.listen(8001, function () {
  console.log('Example app listening on port 8001!');
 });



//  'use strict';

//  setInterval(function () {}, Number.MAX_VALUE); // keep process alive
 
//  var myEmitter = new (require('events').EventEmitter)();
 
//  // add this handler before emitting any events
//  process.on('uncaughtException', function (err) {
//      console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); // err.message is "foobar"
//  });
 
//  myEmitter.emit('error', new Error('foobar'));'use strict';

//  setInterval(function () {}, Number.MAX_VALUE); // keep process alive
 
//  var myEmitter = new (require('events').EventEmitter)();
 
//  // add this handler before emitting any events
//  process.on('uncaughtException', function (err) {
//      console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); // err.message is "foobar"
//  });
 
//  myEmitter.emit('error', new Error('foobar'));'use strict';

//  setInterval(function () {}, Number.MAX_VALUE); // keep process alive
 
//  var myEmitter = new (require('events').EventEmitter)();
 
//  // add this handler before emitting any events
//  process.on('uncaughtException', function (err) {
//      console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); // err.message is "foobar"
//  });
 
//  myEmitter.emit('error', new Error('foobar'));漀



// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgersController.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
