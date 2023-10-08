const coding = ['java', 'cpp', 'rb', 'py']

coding.forEach(function(val){
    // console.log(val);
})
// output
// java
// cpp
// rb
// py

coding.forEach((item)=> {
    // console.log(item);
})
// output
// java
// cpp
// rb
// py

//by referencing ☺
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe) 
// output
// java
// cpp
// rb
// py

coding.forEach((item , index, array)=> {
    // console.log(item, index, array);
})
// java 0 [ 'java', 'cpp', 'rb', 'py' ]
// cpp 1 [ 'java', 'cpp', 'rb', 'py' ]
// rb 2 [ 'java', 'cpp', 'rb', 'py' ]
// py 3 [ 'java', 'cpp', 'rb', 'py' ]

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})