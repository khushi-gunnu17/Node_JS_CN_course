
const fs = require("fs")
const path = require("path")

// Reading data 
const filePath = path.join("src", "home", "05_data.txt")
const filePathResolved = path.resolve("src", "home", "05_data.txt")


console.log(filePath);
console.log(filePathResolved);
console.log(path.extname(filePathResolved));
console.log();

// different paths in different OS, so we need to make the code cross-platform.

fs.readFile(filePathResolved, (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
});