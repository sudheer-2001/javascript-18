// High order Array loops
// special loops of array

// for of 

// ["", "", ""]
// [{}, {}, {}]

const array = ["flash", "hello", "hii", "superman", "batman"]
for (const i of array) {
    console.log(i);
}

const greetings = 'Hello world'
for(const greet of greetings){
    //console.log(`each char is ${greet}`);
}

//Maps --> keys are unique, values can be duplicate , if incase
const map = new Map()
map.set('In', "India")
map.set('Usa', "United States of India")
map.set('Fr', 'France')
map.set('in', 'India')
map.set('In', 'india') // not inserted into map

// console.log(map);

for (const key of map) {
    // console.log(key);
}

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

const myObject = {
    game1 :'batman',
    game2 :'spiderman'
}
// for (const key of myObject) {  Error  // myObject is not Iterable
//     console.log(key);
// }

// for (const [key, value] of myObject) {   Error  // myObject is not Iterable
//     console.log(key, ':-', value);
// }