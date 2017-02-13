var bodyParser = require("body-parser");
var Article = require("../models/Article");
var path = require("path");

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));
    
    
    // getting all articles

    app.get("/api/articles", function(req, res){
    })
}


