const score = 100
// console.log(score); => 100

const balance = new Number(100)
// console.log(balance); => [Number: 100] 

// console.log(balance.toString().length) => 3
// console.log(balance.toFixed(1)) => 100.0
// console.log(balance.toFixed(2)) => 100.00


// console.log(112.556.toPrecision(4)) => 112.6
// console.log(112.556.toPrecision(3)) => 113
// console.log(112.556.toPrecision(2)) => 1.1e+2

const hundreds = 10000000
// console.log(hundreds.toLocaleString()); => 10,000,000
// console.log(hundreds.toLocaleString('en-IN')); => 1,00,00,000

// console.log(Number.MAX_VALUE) => 1.7976931348623157e+308
// console.log(Number.MIN_VALUE) => 5e-324
// console.log(Number.MAX_SAFE_INTEGER); => 9007199254740991

// *****************Maths*******************

// console.log(Math); => Object [Math] {}
// console.log(Math.abs(-4)); => 4
// console.log(Math.abs(4)); => 4
// console.log(Math.round(4.5)); => 5
// console.log(Math.ceil(4.1)); => 5
// console.log(Math.floor(4.9)); => 4
// console.log(Math.min(6, 2, 3, 5)); => 2
// console.log(Math.max(6, 2, 3, 5)); => 6

console.log(Math.random());  //eturns a pseudorandom number between 0 and 1.
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1))+ min)