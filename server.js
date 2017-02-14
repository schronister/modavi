// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

// Initialize Express
var app = express();


const apiRoutes = require("./dev/api/api-routes.js")(app);

app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/modavi");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// Main "/" Route.
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, './public', 'index.html'))
})





// Listen on port 3000
app.listen(process.env.PORT|| 3000, function() {
  console.log("App running on port 3000!");
});
