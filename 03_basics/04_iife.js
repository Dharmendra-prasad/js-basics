// Immediately Invoked Function Expressions (IIFE)


(function chai(){                       //this is iife function used to call automaticall just to avoid global non usable variable
    // named IIFE
    console.log(`DB CONNECTED`);
})();                   //() used to execute this iife          
//mendetory to close this iife with ;

( (name) => {                           //we can use arrow function as well in iife
    console.log(`DB CONNECTED TWO ${name}`);  
} )('hitesh')                              //also can pass the arguments in it