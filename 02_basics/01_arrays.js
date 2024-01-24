// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6) //adds element at the end of the array
// myArr.pop()   //remove element from the end of the array


// myArr.unshift(9)  // add element at the start of the arrays
// myArr.shift() //remove element from the start of the array

// console.log(myArr.includes(9));  //search for element in array and return boolean value
// console.log(myArr.indexOf(3));  //search for element based on index and return element

// const newArr = myArr.join()  //convert elements in string format

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  //give copy of the element starting from index 1 to 3 and 3 is excluded

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  //cut the aaray from original aarya and return, here it took from index 1-3 and 3 is included here
console.log("C ", myArr);
console.log(myn2);