// if

const temp = 41
if(temp<50){
    console.log("less than 50");
}
else{
    console.log("greater than 50");
}

// >, <, >=, <=, ==, !=, ===, !==

if(true) console.log("executed");

// if(true) console.log("test1"),
// console.log("test2");   multiple lines but code not readable or unmexture type of code

// if , else if, else

// logical operators -->   &&, ||
const isLogginedIn = true;
const debitCard = true;
const entryPass = false;
if(isLogginedIn && debitCard){
    console.log("Allow to buy course");
}
if(isLogginedIn || entryPass){
    console.log("Allow to buy course");
}