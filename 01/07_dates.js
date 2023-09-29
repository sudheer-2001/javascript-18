let myDate = new Date()
// console.log(myDate)  => 2023-09-29T11:15:16.604Z
// console.log(myDate.toString());  => Fri Sep 29 2023 11:15:16 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); => Fri Sep 29 2023
// console.log(myDate.toLocaleString()); => 9/29/2023, 11:15:16 AM
// console.log(typeof myDate); => object

let myCreateDate = new Date(2023, 0, 23)

// console.log(myCreateDate)  => 2023-01-23T00:00:00.000Z

// console.log(myCreateDate.toDateString())  => Mon Jan 23 2023

let newDate = new Date(23, 0, 23, 5, 3)

// console.log(newDate.toLocaleString()); => 1/23/1923, 5:03:00 AM

let anotherDate = new Date("2023-01-14") 
let anotherDate1 = new Date("01-14-2023") 
// console.log(anotherDate.toLocaleString());  => 1/14/2023, 12:00:00 AM
// console.log(anotherDate1.toLocaleString()); => 1/14/2023, 12:00:00 AM

// console.log(Date.now());  => 1695987920579
// console.log(anotherDate1.getTime());  => 1673654400000
// console.log(Math.floor(Date.now()/1000)) => 1695988146

let todayDate = new Date()
// console.log(todayDate)  => 2023-09-29T11:15:16.604Z
// console.log(todayDate.getMonth()+1); => 9, here months starts from 0 that's why i add 1 to it.
// console.log(todayDate.getDay()); => 5 , sunday-0, monday-1 etc........

newDate.toLocaleString('default', {
    weekday: "long"
})