let score = "33abc"

console.log(typeof "33abc");
console.log(typeof (score));

console.log(typeof Number("33abc")) 
console.log(Number("33abc")) //Nan - Not-a-Number

console.log(Number(null))  // 0
console.log(Number(true)) // 1 
console.log(Number(false)) // 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) 
console.log(booleanIsLoggedIn) // true

console.log(Boolean("")) //empty string => false
console.log(Boolean("sudheer")) // true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber) // 33
console.log(typeof stringNumber) // string