var bodyParser = require("body-parser");
var Article = require("../models/Article");
var User = require("../models/User");
var path = require("path");

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));
    
    
    // getting all articles

    app.get("/api/articles", function(req, res){
    	console.log("Yer gettin all the articles!");
    })

    //get all articles of a category
    app.get("/api/articles/category/:category", function(req,res){
    	console.log("Getting all articles of " + req.params.category);

    })

    app.get("/api/articles/id/:id", function(req, res){
    	console.log("Getting article with id "+ req.params.id);
    	Article.findById(req.params.id, function(err, doc){
    		if (err) throw err;
    		res.json(doc);
    	})
    })

    //user authentication
    




}


