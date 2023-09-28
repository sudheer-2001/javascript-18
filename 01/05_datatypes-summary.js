// Datatypes - 2 types
// primitive
// Reference (Non-primitive)

//Primitive=> 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Null -> empty,
// Undefined -> variable declared,memory space declared , but no value declared
// Symbol -> unique
// BigInt -> require large numbers where it will useful

const score = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // by manually => let userEmail = undefined;

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId); => false

//javascript internally treated - particular datatype.
const bigNumber = 987549837534743543n 

// Reference (Non Primitive)

// Array, Objects, Functions
const heroes = ["prabhas", "mahesh", "ashwin"]

let myObj = {
    name: "sudheer",
    age: 22
}

// function is like a variable
const myFunction = function(){
    console.log("hello world!")
}

// console.log(typeof anotherId) => symbol
// console.log(typeof bigNumber) => bigint
// console.log(typeof sudheer) => undefined --> due to there is no sudheer variable
// console.log(typeof outsideTemp) => object --> null is a type of object

// console.log(typeof heroes) => object
// console.log(typeof myObj) => object
// console.log(typeof myFunction) => function -> basically it is an object function