// query database for when to save articles
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    url: {
        type: String
    },
});

//mongoose adds s at end? should model("user"??) originally Article....
var Article = mongoose.model("user", ArticleSchema);
module.exports = Article;