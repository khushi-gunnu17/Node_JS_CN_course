
const http = require('http')

// Post request in NodeJS  
const server = http.createServer((req, res) => {
    if(req.method == 'POST') {
        // expecting data from client 
        // on is a function takes two parameters, first is the name of the event and the second is a listener.
        // data means the new data is available.
        let body = "";
        
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        // end of stream of data
        req.on("end", () => {
            console.log(body);
            res.end('Data is received.')
        })
    } else {
        // these lines below are executing first before the data has even received.
        res.end("Welcome to NodeJS.")
    }
    
});

server.listen(3100, () => {
    console.log("Server is listening on port 3100.");
})


// PostMan is used to test many APIs like SOAP API, REST API, simple HTTP API, GraphQL