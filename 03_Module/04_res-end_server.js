const http = require("http")

const server = http.createServer((req, res) => {

    res.write('This is coming from NodeJS server. ');

    if(req.url == "/first") {
        return res.end("This is the first response")
    } else {
        return res.end("This is the default response.");
    }
})

server.listen(3100, () => {
    console.log("Server is listening at port 3100.");
})