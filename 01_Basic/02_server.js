// create a server using node JS 

// 1. Import HTTP library/module.
// core module
const http = require("http");



// 2. Create Server
const server = http.createServer((req, res) => {
    console.log(req.url);
    // with write the execution of the code is still going to continue, but with end that is not the case.
    res.write("Welcome to my application. ")

    if(req.url == "/product") {
        // response ends = You cannot write after end, it will give error
        // make sure that you are also ending the execution of the program.
        return res.end("This is the product page.")
    } else if(req.url == "/user") {
        return res.end("This is the user page.")
    }
    // here modifying the response
    res.end("Welcome to Node JS Ninja server")

    // logging
})




// acting as a listener 
// 3. also specify a port number to listen to the client request.

server.listen(3100, () => {
    console.log("Server is listening on port 3100");
});
