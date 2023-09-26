const accountId = 1234
let accountEmail = "sudheer@gmail.com"
var password = "Sudheer"
accountCity = "Jaipur"
let accountState;

//accountId = 4343
accountEmail = "hello@gmail.com"
password = "hellooo"
accountCity = "Bangalore"


/*
    prefer not to use var
    var is function scoped , let is block scoped
*/
console.table([accountId,accountEmail,password,accountCity,accountState])