
const express = require("express");
const server = express();

// Setting custom header on response object
const setCustomHeader = (res, headerName, headerValue) => {

  res.set(headerName, headerValue)

  console.log(`${headerName} with value ${headerValue} has been set successfully!`);
};

// Route that uses the setCustomHeader function
server.get("/", (req, res) => {
  setCustomHeader(res, "Content-Type", "application/json");
  res.send(`get method called!`);
});

// Starting server on port 5000
server.listen(5000, () => {
  console.log("server is listening at 5000");
});
