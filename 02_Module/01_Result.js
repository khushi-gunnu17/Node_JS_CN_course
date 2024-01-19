// call arithmetic functions, get result and print on terminal.

// // how to import a module in common JS
// const arithmeticModule = require("./Arithmetics");


// console.log("Loading Arithmetic");
// // This tells us that this file is executing the Arithmetic file. 

// // calling the sum function 
// const result = arithmeticModule.sum(10, 20);
// console.log(result);







// How to import a module in ES6
// first, we have to use the mjs extension with the file name

// import * as arithmeticModule from "./Arithmetics.mjs"
import {sum} from "./Arithmetics.js"


// console.log(arithmeticModule.sum(10, 20));
console.log(sum(10, 20));
// console.log(arithmeticModule.num);

// tree shaking = it will remove the imports which you are not using.

// make changes in the package.json file , if you don't want to use mjs extension and want to use only js extension.