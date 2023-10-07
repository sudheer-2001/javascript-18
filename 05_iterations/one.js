// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element); 
// }

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop : ${i}`); 
    for (let j = 0; j <=10 ; j++) {
        console.log(`inner loop : ${i} and inner loop: ${j}`);
    }
}
let array = ["flash", "hello", "hii", "superman", "batman"]
console.log(array.length);
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

//continue  --> skips particular iteration
//break     --> exits out of that particular loop