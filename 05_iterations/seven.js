const numbers = [1,2,3,4,5,6,7,8]

const myNums = numbers.map((num) => num + 10)
// console.log(myNums);  [11, 12, 13, 14,15, 16, 17, 18]

// const myNums1 = numbers.map((num) => { num + 10})
// console.log(myNums1);         => [ undefined, undefined,undefined, undefined, undefined, undefined, undefined, undefined ]

const myNums1 = numbers.map((num) => {return num + 10})
// console.log(myNums1);  =>  [11, 12, 13, 14,15, 16, 17, 18]

const myNums2 = numbers
                .map((num) => num*10)
                .map((num) => num + 1)
// console.log(myNums2);          => [11, 21, 31, 41, 51, 61, 71, 81]

const myNums3 = numbers
                .map((num) => num*10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)
// console.log(myNums3);            => [ 41, 51, 61, 71, 81 ]

