// singleton
// Object.create

// object literals
const mySym = Symbol("Key1")
const jsUser = {
    name: "Sudheer",
    "full name": "sudheer chowdary",
    [mySym] : "myKey1",
    age: 22,
    email: "bsudheer@google.com",
    isLoggedIn: false,
    lastLoginnedDays: ["sunday", "saturday"]
}
// console.log(jsUser.email);  =>bsudheer@google.com
// console.log(jsUser["email"]);  => bsudheer@google.com
//\\ console.log(jsUser.full name)  //error
// console.log(jsUser["full name"]); => sudheer chowdary
// console.log(jsUser[mySym]); => myKey1

//Freezing an object does not allow new properties to be added to the object 
//and prevents removing or altering the existing properties. 
jsUser.email = "bnaveen@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "chatgpt@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`);
}
jsUser.greeting();
