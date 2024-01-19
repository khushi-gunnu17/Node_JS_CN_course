const http = require("http");
const fs = require("fs")        // file system

const server = http.createServer((req, res) => {
    const data = fs.readFileSync("index.html").toString()
    res.end(data)
})

server.listen(4000, () => {
    console.log("server is listening on port 4000");
})


// how to read an HTML file by the server.