const user = {
    username: "sudheer",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
//  user.welcomeMessage(); => sudheer, welcome to website   {username: 'sudheer', price: 999,welcomeMessage: [Function: welcomeMessage] }
user.username= "sam";
// user.welcomeMessage() => sam, welcome to website {username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }
// console.log(this);   => {}

function one() {
    console.log(this);
}
one();

function chai(){
    let username = "sudheer"
    // console.log(this.username); => undefined -- in functions we can't use "this"
}
chai();

const addTwoNums = (num1,num2)=>{
    return num1 + num2;
}
// console.log(addTwoNums(3, 4));  => 7

const addTwoNums1 = (num1,num2) => num1 + num2
// console.log(addTwoNums1(4,5));  => 9

const addTwoNums2 = (num1,num2) => (num1 + num2)
// console.log(addTwoNums2 (5, 6));  => 11

const addTwoNums3 = (num1, num2) => ({username: "hello"})
// console.log(addTwoNums3(3,4));   => { username: 'hello' }

// const myArray = [1, 2, 3, 4, 5];
// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())

