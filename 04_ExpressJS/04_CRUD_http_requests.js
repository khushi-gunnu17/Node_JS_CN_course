const express = require("express")

const server = express()

server.get("/", (req, res, next) => {
    console.log("This is the first middleware.");
    next()
})

// get request
server.get("/", (req, res) => { 
    // HTTP Header
    res.set('Content-Type', 'text/plain')       // Twp properties   // http header
    res.send("Welcome to the expressjs server.")
})

// post request
server.post('/', (req, res) => {
    res.status(201).send("Post request received.")
})

// put request
server.put('/', (req, res) => {
    res.send("Put request received.")
})

// delete request
server.delete('/', (req, res) => {
    res.send("delete request received.")
})

server.listen(3100, () => {
    console.log("Server is listening on the port 3100.");
})