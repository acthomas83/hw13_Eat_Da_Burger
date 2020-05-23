let express = require("express");

let PORT = process.env.PORT || 8001;

// let app = express();

// var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!'); // This will serve your request to '/'.
});

//1. set up API routes - just like the way routes are defined in controllers/catsController.js of the Cats app and used in server.js of the Cats app
//2. set up a handlebars 'views' folder and set up handlebars in this file the same way that it is set up in server.js of the Cats app
     //- this has already been started on lines 27-30
//

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
