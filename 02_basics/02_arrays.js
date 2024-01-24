const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) // creates array inside array [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

 //console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

 const allHeros = marvel_heros.concat(dc_heros) // concat all the values [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
 console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator spread the values or break all the value to sigle value and we simply adding in array format
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //this flat method flatten the array element and infinity specify to flatten the element till infinity of depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // is it array
console.log(Array.from("Hitesh")) //from convert elements to array format [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting //if it is not able to convert it then returns blank array []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // of method add the variable and element to create a new array