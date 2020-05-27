//Load http module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

//Create http server
const server = http.createServer((req, res) => {

    //Set the respone HTTP header with HTTP status anc content type
    res.writeHead(200, {'Context-Type': 'text/plain'});

    //Send the response body "Hello World"
    res.end('Hello World\n');
});

//Prints a log once the server starts listening
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});