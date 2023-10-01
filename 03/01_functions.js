function myName(){
    console.log("s");
    console.log("u");
    console.log("d");
    console.log("h");
    console.log("e");
    console.log("e");
    console.log("r");
}
// myName();

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}
// addTwoNumbers(); => NaN
// addTwoNumbers(10,20);  => 30
// addTwoNumbers(30,"40"); => 3040
// addTwoNumbers(3,"a"); => 3a
// addTwoNumbers(3,null); => 3

// const result = addTwoNumbers(10,30); => 40
// console.log(result);  => undefined

function addTwoNumbers1(number1,number2){
    let result = number1 + number2
    return result;
    console.log(result); // return below statements not executed
}
const result = addTwoNumbers1(10,30);
// console.log("Result: ",result); => Result:  40

function userLoginMessage(username){
    if(username === undefined) {  // or if(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}
// console.log(userLoginMessage("sudheer")); => sudheer just logged in
// console.log(userLoginMessage()); =>Please enter a username _| undefined

function userLoginMessage1(username="sam"){
    if(!username) { 
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}
// console.log(userLoginMessage1()) => sam just logged in
// console.log(userLoginMessage1("sudheer")); => sudheer just logged in

function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(100,200,300,400)); => [ 100, 200, 300, 400 ]

function calculateCartPrice1(value1,value2, ...num1){
    return num1;
}
// console.log(calculateCartPrice1(100,200,300,400,"sudheer")); => [ 300, 400, 'sudheer' ]

const user = {
    name: "sudheer",
    price: 999
}
function handleObject(anyObject){
    return `username is ${anyObject.name} and price is ${anyObject.price}`;
}
// console.log(handleObject(user));    => username is sudheer and price is 999

const user1 = {
    name: "sudheer",
    prices: 999
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}
//handleObject(user1);  => username is sudheer and price is undefined

// handleObject({name: "java",price: 999})  => username is java and price is 999

const myNewArray = [100,200,300];

function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));  => 200
// console.log(returnSecondValue([100,200,300,400]));  => 200