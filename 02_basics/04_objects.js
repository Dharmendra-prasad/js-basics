// const tinderUser = new Object() // this is singlton object

const tinderUser = {} // this is not a singlton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {                       //creating object insuide object
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // accessing object inside object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }                    
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //combining two object with assign method 

const obj3 = {...obj1, ...obj2}   //this is the best way to combine two object with seperated operator { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
 console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));  //accessing key of object and getting in array format [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //same getting values [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); //same getting keys and values respectively [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //checking property exist or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //Destructuring Object keys

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",  //api json object example
//     "price": "free"
// }

[
    {},
    {},   //json object example
    {}
]