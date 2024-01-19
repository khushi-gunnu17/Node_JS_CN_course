
const fs = require("fs")

// To read file content using blocking code.

console.log("Starting to read");
console.log();

const buffer = fs.readFileSync("03_data.txt", {encoding:'utf8'})
// buffer is that extra storage which stores all of your extra data bcoz of the difference in speed of OS and the programming language to send and read the file.

console.log(buffer);
// .toString() is now not used with the buffer because we are handling the data already with the encoding option above while readin it.

// blocked this code, it is waiting for the above op
console.log();
console.log("Reading stopped.");

console.log();





// Creating and writing in a file 

console.log("Writing in a file.");

try {
    fs.writeFileSync("03_employee.txt", "Name : Gunnu Jangid, Age : 19, Position : Manager")
} catch (error) {
    console.log(error);
}
console.log();



// append some data in an existing file.
// Append another employee data

const another = "\nName : Khushi Jangid, Age : 20, Position : Manager"

fs.appendFileSync("03_employee.txt", another)



// Deleting a file 

try {
    fs.unlinkSync("03_employee.txt", )
} catch (error) {
    console.log("Deleted File doesn't exist");
}

console.log("File Writing done.");