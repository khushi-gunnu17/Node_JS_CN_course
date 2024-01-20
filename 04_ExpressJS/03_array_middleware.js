const express = require("express")

const server = express()

function firstMiddleWare(req, res, next) {
    console.log("This is first middleware.");
    next();
}

function secondMiddleWare(req, res, next) {
    console.log("This is second middleware.");
    next()
}

// middleware for all the requests
function globalMiddleWare(req, res, next) {
    console.log("This is application-level middleware.");
    next();
}

// this is going to be executed for all the requests
server.use(globalMiddleWare);

// Array of midllewares
// Ordering matters here.
// root level middlewares going to be executed for the send requests.
server.get("/send", [firstMiddleWare, secondMiddleWare], (req, res) => {
    res.send("This is the ExpressJS Server.")
})

server.listen(3000, () => {
    console.log("Server is listening on the port 3000.");
})