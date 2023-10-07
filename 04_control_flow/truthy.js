// const userEmail = "sudheer.ai"  => got user email
// const userEmail = "" => Dont have user email
// const userEmail = []  => got user email

// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("Dont have user email");
// }


// falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// "0", 'false', " ", [], {}, function(){}

const userEmail = []
if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// console.log(false == 0);     //=> true
// console.log(false == '');    //=> true
// console.log(0 == '');       //=> true

//nullish coalescing operator (??): null undefined
// control under third parties ex: firebase
// incase null or undefined get => default values will be get
let val1;
val1 = 5 ?? 10
console.log(val1);  // 5

val1 = null ?? 10
console.log(val1);  // 10

val1 = undefined ?? 20
console.log(val1); // 20

val1 = null ?? 10 ?? 20
console.log(val1);  // 10

//Terinary Operator
// condition ? statement1: statement2

50>100 ? console.log("less than 50"): console.log("greater than 50"); //greater than 50
const a = 50>100 ? 50 : 100
// console.log(a); => 100