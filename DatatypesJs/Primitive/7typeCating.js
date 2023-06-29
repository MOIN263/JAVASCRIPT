
// 'typeof() is the builtin method in javascript to know the datatype of the variables

let fullName = 'smufcodes' ;
let numbr = 34
let lightison = true 

console.log(typeof(fullName));
console.log(typeof(numbr));
console.log(typeof(lightison));

// typecasting : converting one datatype into another datatype is known as the type casting
// in javascript there are mainly parseInt(),parseFloat(),Number(),+ sign ,str()

// String to Int
// We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

// parseInt()
// Number()
// Plus sign(+)
let num1 = '10'
let numInt1 = parseInt(num1)
console.log(numInt1) // 10
console.log(numInt1) // 10
console.log(numInt1) // 10


// String to Float
// We can convert string float number to a float number. Any float number inside a quote is a string float number. An example of a string float number: '9.81', '3.14', '1.44', etc. We can convert string float to number using the following methods:

// parseFloat()
// Number()
// Plus sign(+)

let num2 = '9.81'
let numFloat2 = parseFloat(num2)

console.log(numFloat2) // 9.81

console.log(numFloat2) // 9.81

console.log(numFloat2) // 9.81
// Float to Int
// We can convert float numbers to integers. We use the following method to convert float to int:

// parseInt()
let num = 9.81
let numInt = parseInt(num)

console.log(numInt) // 9