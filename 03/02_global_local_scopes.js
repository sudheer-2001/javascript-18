// {} => scope used in functions,if-else etc...
var c = 300
if(true){
    const a = 10 
    let b = 20
    var c = 30
}
// console.log(a); error
// console.log(b); error
// because const and let cannot used in function scopes, they are used in block scopes
// console.log(c); => 30 functional scope

let a = 100
if(true){
    let a = 10;
    const b = 20;
    // console.log("inner: ",a); => inner:  10
}
// console.log(a); => 100

function one(){
    const username = "sudheer"
    function two(){
        const website = "hello"
        console.log(username);
    }
    two();
    // console.log(website); error
}
// one();  => sudheer

if(true){
    const username = "sudheer"
    if(username==="sudheer"){
        const website = "hello ";
        // console.log(website + username); => hello sudheer
    }
    // console.log(website); => error
}
// console.log(username); => error

// console.log(addOne(5)); => 6
function addOne(num) {
    return num+1;
}



// console.log(addTwo(5)); => error
const addTwo = function(num){
    return num+2;
}
// console.log(addTwo(5)); => 7