// console.log("start");
// setTimeout(() => {
//     console.log("Log inside timeout");
// }, 0)
// while(true) {
//     console.log("Log inside while loop");
// }
// console.log("end");



// const compute = () => {
//     let sum = 0
//     for(let i=0; i<= 10000000000 ; i++) {
//         sum+=i;
//     }
//     console.log(sum);
// };
// setTimeout(compute, 0);
// console.log("Done");



// let i = 0;
// setInterval(() => {
//     i++;
//     console.log(i);
// }, 1000)
// console.log(i);



const idle = (ms) => {
    let start = new Date().getTime();
    while(new Date().getTime() < start + ms);
};

console.log("Start");
idle(5000);
console.log("End");