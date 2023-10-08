const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(acc, curVal) {
    //console.log(`acc: ${acc} and current value: ${curVal}`)
    return acc + curVal;
},0) // 0 for initialization of accumulator
// console.log(myTotal);  => 6

// by arrow function
const myTotal1 = myNums.reduce((acc,curVal)=> acc+curVal, 0)
// console.log(myTotal1); => 6

const shoppingCart = [
    {
        item: "js",
        price: 1200
    },
    {
        item: "java",
        price: 12000
    },
    {
        item: "python",
        price: 2000
    }
]
const totalPay = shoppingCart.reduce((acc, item)=> acc + item.price ,0 )
// console.log(totalPay);   => 15200