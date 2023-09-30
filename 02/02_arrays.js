const myHeroes = ["prabhas","ntr","akhil"]
const heroes = ["spiderman","batman"]

myHeroes.push(heroes); 
// console.log(myHeroes) => [ 'prabhas', 'ntr', 'akhil', [ 'spiderman', 'batman' ] ]

// console.log(myHeroes[3]); => [ 'spiderman', 'batman' ]
// console.log(myHeroes[3][1]); => batman

const myHeroes1 = ["prabhas","ntr","akhil"]
const allHeroes = myHeroes1.concat(heroes) // not modify original array But it returns a new array
// console.log(allHeroes); => [ 'prabhas', 'ntr', 'akhil', 'spiderman', 'batman' ]

const all_array = [...myHeroes1, ...heroes]
// console.log(all_array); => [ 'prabhas', 'ntr', 'akhil', 'spiderman', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]].flat(Infinity);
console.log(another_array)

// console.log(Array.isArray("sudheer")); => false
// console.log(Array.from("sudheer"))   => ['s', 'u', 'd', 'e', 'e', 'r']
// console.log(Array.from({name: "sudheer"})); => []

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)) => [ 100, 200, 300 ]
