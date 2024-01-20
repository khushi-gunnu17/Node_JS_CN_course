const express = require('express')

// creating a server 
const server = express()

server.get("/", (req, res) => {
    return res.send("Welsome to ExpressJS.")
})

// static files are files which you want to send as it is without any modifications.
// my static files are in the public folder which can be accessed directly.
server.use(express.static("public"))
// public folders containing static html files are easily accessible by the browser by just adding an /file_name after the server.

server.listen(3100, () => {
    console.log("Server is listening on the port 3100.");
})










// correct syntax question 

// const express = require('express')
// const server = express()
// const path = require('path')

// const publicPath = path.join(__dirname, 'public')
// server.use(express.static(publicPath));