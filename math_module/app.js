var my_mathlib = require('mathlib')();
// console.log(my_mathlib)
let sum = my_mathlib.add(2,3);
console.log("The sum is "+sum);
let product = my_mathlib.multiply(3,5);
console.log("The product is "+product);
let squareVal = my_mathlib.square(5);
console.log("The square value is "+squareVal);
let randNum = my_mathlib.random(1,35);
console.log("Random number is "+randNum);

