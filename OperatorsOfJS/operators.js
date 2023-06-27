// OPERATORS IN THE JAVASCRIPT

//  Assignment operators

// the assignment operators are of diff types 

// =

let firstName = 'smuf'

// +=
// x+=y x=x+y
//x-=y
//x*=y
//x/=y
//x%=y
// x**=y


// Arithmetic Operators
// Arithmetic operators are mathematical operators.

/*Addition(+): a + b
Subtraction(-): a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b*/

let a = 5,b=6;
console.log(`addition ${a+b}`)

console.log(`modulus ${a%b}`)
// modulus gives us the remainder

//--------------------------------------------------------
const PI = 3.14
let radius = 100          // length in meter

//Let us calculate area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)  //  314 m


const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

// Let us calculate weight of an object
const weight = mass * gravity
console.log(weight)        // 706.32 N(Newton)

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC


// Concatenating string with numbers using string interpolation
/*
 The boiling point of water is 100 oC.
 Human body temperature is 37 oC.
 The gravity of earth is 9.81 m/s2.
 */
console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

// Comparison Operators

//  == : equal in value only
//  === : equal in both value and datatype
// != not equal
// > greater than
//  < less than
// >= greater than equal to
//  <= less than equal to

console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
console.log(3 !== 3)            // false, compare both value and data type
console.log(0 == false)         // true, equivalent
console.log(0 === false)        // false, not exactly the same
console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false, not exactly the same


console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

// logical operators

/* The following symbols are the common logical operators: &&(ampersand) , ||(pipe) and !(negation). The && operator gets true only if the two operands are true. The || operator gets true either of the operand is true. The ! operator negates true to false and false to true*/


// && ampersand operator
const check = 4<5 && 10>5
const check1 = -5>-10 && 2<3
const check2 = -5<-10 && 2<1

console.log(check)
console.log(check1)
console.log(check2)


// || pipe operator 

const checker = 4 > 3 || 10 > 5         
const checker1 = 4 > 3 || 10 < 5        
const checker2 = 4 < 3 || 10 < 5 

console.log(checker)
console.log(checker1)
console.log(checker2)

//! Negation examples

let checks1 = 4 >3                     
let checks2 = !(4 >3)                  
let isLightOn = true
let isLightOff = !isLightOn           
let isMarried = !false  

console.log(isMarried)
console.log(checks2)