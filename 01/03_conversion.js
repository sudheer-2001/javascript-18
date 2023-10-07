let score = "33abc"

console.log(typeof "33abc"); // string
console.log(typeof (score)); // string

console.log(typeof Number("33abc")) // number
console.log(Number("33abc")) //Nan - Not-a-Number

// console.log(Number(null))  => 0
// console.log(Number(true)) => 1 
// console.log(Number(false)) => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) 

// console.log(booleanIsLoggedIn) => true
// console.log(Boolean(true)); => true

// console.log(Boolean("")) => empty string => false
// console.log(Boolean("sudheer")) => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber) => 33
// console.log(typeof stringNumber) => string
// console.log(String(null)); => null
//*********************Operation*********************

let value = 3
let negValue = -value
// console.log(negValue) => -3

// console.log(2 + 2) => 4
// console.log(2 - 2) => 0
// console.log(2 * 2) => 4
// console.log(2 ** 4) => 16
// console.log(2 / 2) => 1
// console.log(2 % 3) => 2
// console.log(3 % 2) => 1

let str1 = "hello"
let str2 = "sudheer"
// console.log(str1 + str2) => hellosudheer

// console.log("1" + 2) => 12
// console.log(1 + "2") => 12
// console.log("1" + 2 + 2) => 122
// console.log(1 + 2 + "2") => 32
// console.log((3 + 4) * 5 % 3) => 2

// console.log(+true) => 1
// console.log(+false) => 0
// console.log(+false + 1) => 1
// console.log(+"") => 0
// console.log(+ null) => 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter
gameCounter++
// console.log(gameCounter) => 102

let x = 3
let y = x++
console.log(`x: ${x},y: ${y}`);