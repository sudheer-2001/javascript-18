const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   // console.log(key);
}
// output
// js
// cpp
// rb
// swift

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}
// output
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby
// swift shortcut is for swift by apple

const ar = ['js', 'cpp', 'rb', 'java', 'py']
for (const key in ar) {
    // console.log(key);
}
// output
// 0
// 1
// 2
// 3
// 4

for (const key in ar) {
    // console.log(ar[key]);
}
// output
// js
// cpp
// rb
// java
// py

const map = new Map()
map.set('In', "India")
map.set('Usa', "United States of India")
map.set('Fr', 'France')

// for (const key in map) {
//     console.log(key);
// }

//difference between for of loop and for in loop
// for...of loop
    // used to iterate over the values of an iterable object.
    // Iterable objects include arrays, strings, maps, sets, and other data structures that can be looped through.
    // It provides a more concise syntax for iterating through the values of an iterable,
    //  without having to deal with indexing or accessing properties.
// for...of loop
    // iterates over the keys (or property names) of an object, including both its own properties 
    // and inherited properties from its prototype chain. It's typically used with objects 
    // and is not recommended for use with arrays because it may not iterate through the elements in the expected order


    
    // for...of is used with iterable objects (like arrays and strings) to iterate through their values.
    // for...in is used with objects to iterate through their enumerable properties (keys).