// create a server using node JS 

// 1. Import HTTP library/module.
// core module
const http = require("http");



// 2. Create Server
const server = http.createServer((req, res) => {
    // here comes the request
    res.end("Welsome to Node JS Ninja server")
})
// acting as a listener 



// 3. also specify a port number to listen to the client request.

server.listen(3100, () => {
    console.log("Server is listening on port 3100");
});
