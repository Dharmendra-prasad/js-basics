const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {                                    // object can iterable in for in but map can't
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {      //actully for in loop returns index of array or object so we can just pass it to object and array
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {     //Map can not iterate through for in
//     console.log(key);
// }