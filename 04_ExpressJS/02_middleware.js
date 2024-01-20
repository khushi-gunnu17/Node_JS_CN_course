const express = require('express')

const server = express()

// middlewares
// first one
// server.get("/", (req, res, next) => {
//     // res.send("This is from first middleware.")
//     // Cannot send headers after when they are sent to the client with next()
//     console.log("First middleware hit.");
//     next()
// }, 
// // second middleware
// (req, res) => {
//     res.send("Hello world! This is Express server.")
// })



// You can also separate the above into different functions.
server.get("/", (req, res, next) => {
    console.log("First middleware hit.");
    next()
})
// order matters
server.get("/", (req, res) => {
    res.send("Hello world! This is Express server.")
})



server.listen(3100, () => {
    console.log('Server running at http://localhost:3100');
})