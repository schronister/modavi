// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true,
    unique:true
  },
  // link is a required string
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now
  },
  category: {
    type: String,
    required:true
  },
  content: {
    type: [String]
  },
  quiz: {
    type:[String]
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
