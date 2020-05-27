//route function ends the HTTP request response cycle by returning some response to the HTTP client.
//Middleware functions typically perform some operation on the request or respone and then call the next
//function in the "stack", which might be more middleware or a route handler.

var express = require('express');
var app = express();

//an example middleware function
var a_middleware_function = function(req, res, next) {
    //...perform some operations
    next(); //call next so that Express will call the next middleware function in the chain
}

//function added with use() for all routes and verbs
app.use(a_middleware_function);

//function added with use() for a specific route
app.use('/someRoute', a_middleware_function);

//a middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);

app.listen(3000);