const coding = ['java', 'cpp', 'rb', 'py']

const values = coding.forEach((item) =>{
    return item
})
// console.log(values);  => undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num) => num>4)
// console.log(newNums);   [ 5, 6, 7, 8, 9, 10 ]

const newNums1 = myNums.filter((num) => {
    num>4
})
// console.log(newNums1); []

//by seen above no output, if scope used , compulsory to return seen below
const newNums2 = myNums.filter((num) => {
    return num>4
})
// console.log(newNums2);   [ 5, 6, 7, 8, 9, 10 ]

const a = [1,2,3,4,5,6,7,8,9,10]
const b = []

a.forEach((num)=>{
    if(num>4){
        b.push(num)
    }
})
// console.log(b);  [ 5, 6, 7, 8, 9, 10 ]

let people = [

    {name: 'Rachel', age: 24},

    {name: 'David', age: 16},

    {name: 'Aakash', age: 23},

    {name: 'Franklin', age: 26},

    {name: 'Ricky', age: 17}

];

let users = people.filter((user)=>user.age >=20)
// console.log(users);
// output
// [
//     { name: 'Rachel', age: 24 },
//     { name: 'Aakash', age: 23 },
//     { name: 'Franklin', age: 26 }
// ]
users = people.filter((user)=>{user.age <20})
// console.log(users); []
users = people.filter((user)=>{return user.age <20})
// console.log(users);   [ { name: 'David', age: 16 }, { name: 'Ricky', age: 17 } ]
