console.log("Hello World");


// blocking code
// for(let i=0; i<10000000000; i++) {
//     // doing nothing just consuming time
// }
// console.log("Task to be performed after loop.");

// // this task is in the waiting mode bcos JS is a single threaded lang.
// console.log("I have to wait for this loop to finish");




// non blocking code using node.js
setTimeout(() => {
    console.log("Task to be performed after 8 seconds.");
}, 8000)

console.log("Don't have to wait");
