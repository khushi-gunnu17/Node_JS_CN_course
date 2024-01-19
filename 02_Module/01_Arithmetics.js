// module.exports.sum = (x, y) => {
//     return x + y;
// }

// here, above we can also use just exports in place of module.exports, but it then limits our functionality as then it won't be able to export functions, objects, etc.

// function sum(x, y) {
//     return x + y;
// }

// function div(x, y) {
//     return x / y;
// }

// Ways to create modules in JS
//  - Common JS Module (Older)
// object
// module.exports = {
//     // key : value 
//     // add : sum (also)
//     sum : sum
// }






//  - ES6 Module (Newer)    More optimized

export function sum(x, y) {
    return x + y;
}

export const num = 100      // variable 

export function div(x, y) {
    return x / y;
}