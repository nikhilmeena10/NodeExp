var express = require("express");
var app = express();

//route definition
//specifies callback function which will be invoked whenever there is an
//HTTP GET request with a path ('/') relative to the site root
app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});