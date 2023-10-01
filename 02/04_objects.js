// const tinderUser = new Object() => singleton object
// const tinderUser = {} => not singleton object
const tinderUser = {}
tinderUser.name = "sudheer"
tinderUser.age = 22
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Alex",
            lastName: "Chowdary"
        }
    }
}
// console.log(regularUser.email);  => some@gmail.com
// console.log(regularUser.fullName);  => { userFullName: { firstName: 'Alex', lastName: 'Chowdary' } }
// console.log(regularUser.fullName.userFullName) => { firstName: 'Alex', lastName: 'Chowdary' }
// console.log(regularUser.fullName.userFullName.firstName)  => Alex

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

const obj3 = Object.assign(obj1,obj2);
// console.log(obj3);   => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(Object.assign({},obj1,obj2));  => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log({...obj1, ...obj2}); => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users =[
    {
        id: 1,
        email: "sudheer@yahoo.com"
    },
    {
        id: 1,
        email: "sudheer@yahoo.com"
    },
    {
        id: 1,
        email: "sudheer@yahoo.com"
    }
]
console.log(users[0].email);

// console.log(tinderUser) => { name: 'sudheer', age: 22, isLoggedIn: false }
// console.log(Object.keys(tinderUser)); => [ 'name', 'age', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); => [ 'sudheer', 22, false ]
// console.log(Object.entries(tinderUser)); => [ [ 'name', 'sudheer' ], [ 'age', 22 ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); => true

const course = {
    courseName : "javaScript",
    price: 999,
    courseInstructor: "sudheer"
}

// course.courseInstructor;

const{courseInstructor} = course
// console.log(courseInstructor); => sudheer

const{courseInstructor: instructor} = course
// console.log(instructor); => sudheer

const navbar = ({company}) => {

}
navbar(company="sudheer");

// JSON => it is javascript object notation
// {
//     "name": "sudheer",
//     "age": 22,
//     "email": "sudheer@google.com"
// }

[
    {},
    {},
    {}
]
