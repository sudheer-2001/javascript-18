// storing a collection of multiple items under a single variable
// in javascript, resizable and can mix of different datatypes.

const myArr = [10, 20, 30, 40, 50]
// console.log(myArr[1]) => 20

const Heroes = ["prabhas", "akhil"]
// console.log(Heroes[1]) => akhil

const array1 = new Array(1, 2, 3, 4)
// console.log(array1[0]) => 1

// Arrays Methods

array1.push("hi");
// console.log(array1); => [ 1, 2, 3, 4, 'hi' ]

// pop() it removes last element
array1.pop();
// console.log(array1) => [ 1, 2, 3, 4 ]

array1.unshift(9);
// console.log(array1) => [ 9, 1, 2, 3, 4 ]

array1.shift() // to delete a starting element
// console.log(array1)  => [ 1, 2, 3, 4 ]

// console.log(array1.includes(9)) => false
// console.log(array1.indexOf(9)) => -1
// console.log(array1.indexOf(3)) => 2

const newArr = myArr.join()
// console.log(myArr)  => [ 10, 20, 30, 40, 50 ]
// console.log(newArr);   => 10,20,30,40,50
// console.log(typeof newArr) => string

//slice , splice

// console.log("A ",myArr) => A  [ 10, 20, 30, 40, 50 ]
const myn1 = myArr.slice(1, 3) // 3 is an exclusive and not modify orignal array
// console.log(myn1) => [ 20, 30 ]
// console.log("original", myArr); => original [ 10, 20, 30, 40, 50 ]

// console.log("B ",myArr)  => B  [ 10, 20, 30, 40, 50 ]
const myn2 = myArr.splice(1,3); // 3 is an inclusive and it modifies the original array
// console.log(myn2) => [ 20, 30, 40 ]
// console.log("original", myArr); => original [ 10, 50 ]