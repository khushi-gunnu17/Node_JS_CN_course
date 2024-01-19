// 1. Import readline 
import readline from "readline";
// const readLine = require("readLine");    // for commonJS only and we have specified the type as module in package.json 


// 2.  Configure interface to connect with terminal/command line.
const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// 3.  Reading Values
// chain of callbacks
userInterface.question("Enter first number : ", (num1) => {
    userInterface.question("Enter second number : ", (num2) => {
        // num1, num2       // num1 can be accessed bcoz of closure
        const sum = Number(num1) + Number(num2)
        console.log(sum);
    })
})