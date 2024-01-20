// install express first as it is not part of the core library of nodeJS.
const express = require('express');

// Create a server
const server = express();

// Listen for default request / Handle Request
// server.use()        // irrespective of the request method, takes all the request methods like get, post

// takes two parameters, the path and then it takes a callback
server.get("/", (req, res) => {
    res.send("Welcome to Express server.")      // it is a wrapper to res.end(), that it internally calls this res.end() func but adds more functionality to it like request headers such as contenttype, content length, whereas in res.end() you have to manually call these functions.
})

// Listen on specified Port 
server.listen(3100, () => {
    console.log("Server is listening on port 3100.");
})