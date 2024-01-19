// 1. import our module first

// These are Input / Output Operations

const fs = require("fs")


// Reading the data using async
fs.readFile('03_data.txt', (error, data) => {
    if(error) {
        console.log(error);
    } else {
        console.log(data.toString());
    }
})



// // Writing the data using async.
fs.writeFile("04_employee.txt", "New Employee", (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("File is written.");
    }
});



// // appending the file using async.
fs.appendFile("04_employee.txt", "\nAnother Employee", (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("File is updated.");
    }
})


// // deleting a file 
// fs.unlink("04_employee.txt", (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("File has been deleted.");
//     }
// })


console.log("This is another operation.");