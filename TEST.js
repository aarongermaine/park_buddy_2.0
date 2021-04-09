// var express = require('express')
// var app = express()
// var port = 3000
// var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.get('/apple', function(req, res){
	res.render("monkey")
})
// route to post a favorite park to
// stores the req.body to the database
// and a favorite has been made!
app.listen(port, function(){
  "your app is listening"
})