// Primitive

// 7 Type : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 2.5
const loggedIn = false
const outSideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id==anotherId); //false

const bigNumber = 2342412234234n

/*

Type	    typeof return value	   Object wrapper
Null	    "object"	           N/A
Undefined	"undefined"	           N/A
Boolean	    "boolean"	           Boolean
Number	    "number"	           Number
BigInt	    "bigint"	           BigInt
String	    "string"	           String
Symbol	    "symbol"	           Symbol

*/

// Reference or Non Primitive

// Arrays, Objects, Functions


const heros = ["Shaktiman" , "Naagraj" , "Doga"] //arraye

let myObject = {                //Object
    name: "Dharmendra",
    age: 27
}

const myFunction = function(){
    console.log("Hello World");
}

