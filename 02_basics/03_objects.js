// singleton
// Object.create

// object literals
const mySym = Symbol("key1") //this is how symbol gets created


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",            // this is how symbols get used the reference of above line using []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])  // the another way of using or accessing the value in objects
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
console.log(JsUser["full name","age"]) //this will print only age not fullname
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)               //here we are freezing the object so no further updation in object will update the object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");           //creating the function
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //creating a fuction with string litterals
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());