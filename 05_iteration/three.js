// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {       //automatically iterates
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()   //map is like Object but it hold only unique keys and not iterable with for in loop
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);  //iterating map with for of loop
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {  //this will through error because object can not be iterable by for of but can be iterable by for in loop
    console.log(key, ':-', value);
    
}