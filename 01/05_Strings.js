const name = "sudheer"
const count = 50
// console.log(name + count +" value") => sudheer50 value

//string interpolation => is the process of evaluating a string literal containing one or more placeholders
console.log(`my name is ${name} and my value is ${count}`)

const gameName = new String("sudheerB")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('d'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 7)
console.log(anotherString)

const newStringOne = "      sudheer         "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sudheer.com%20itsme"
console.log(url.replace('%20','-'))

// console.log(url.includes('sudheer')) => true
// console.log(url.includes('sundar')) => false

// split(separator)
// split(separator, limit)

console.log(url.split("s"))
console.log(url.split("s",2))