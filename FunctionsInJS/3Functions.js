
// Anonymous Functions 

// Anonymous function are also called the functions without name 

// for example 
const anonymousFunc = function() {
    console.log(
        'i am an anonymous function'
    )
}

// the use of an anonymous function as a callback in the setTimeout() function

function sayHello() {
    console.log("Hello, world!");
  }
  
  setTimeout(function() {
    sayHello();
  }, 5000);  //this code will be executed after five minutes 


/*Expression Function
Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.*/

// Function expression
const square = function(n) {
  return n * n
}

console.log(square(2)) // -> 4

/*Self Invoking Functions
Self invoking functions are anonymous functions which do not need to be called to return a value.*/

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)