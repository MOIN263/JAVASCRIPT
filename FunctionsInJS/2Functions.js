
// functions with parameter 

// in a function we can pass different kinds of datatypes as a parameter (number, string, boolean, object, function)

//  syntax of function with one parameter 

// function functionName(parameter1) {
    // block of code 

// }

// functionName(parameter1) //calling the function

// wirte a function to calculate the area of the circle which takes its radius as the parameter 

function cirArea(r) {
    // area of circle = pi *r*r
    area = Math.PI * r * r
    return area 
}

// calling the function

console.log(cirArea(10));


// we can write this function taking one parameter for calulating the squares of the given number

function sqrNum(a) {
    let sqr = a*a
    return sqr
}

console.log(sqrNum(10));


// function with two parameters
// function functionName(parm1, parm2) {
  //code goes her
// }


// functionName(parm1, parm2) // during calling or invoking two arguments needed
// Function without parameter doesn't take input, so lets make a function with parameters

function mulTwoNumbers(numOne, numTwo) {
  let mul = numOne * numTwo
  console.log(mul)
}
mulTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return


// function with multiple parameters
// function functionName(parm1, parm2, parm3,...){
  //code goes here
// }
// functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed


// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));

const areaSqr = (side) => {
    let area = side * side 
    return area 
}
console.log(areaSqr(13))

// UNLIMITED NUMBER OF PARAMETER IN REGULAR FUNCTION

// function declaration
function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// UNLIMITED NUMBER OF PARAMETERS IN ARROW FUNCTION

const SumAllNums = (...args) => {
    let sum = 0
    for (const element of args){
        sum += element 

    }
    return sum
}


console.log(SumAllNums(1, 2, 3, 4,5,6,7)) // 28
console.log(SumAllNums(10, 20, 13, 40))  // 83
console.log(SumAllNums(15, 20, 30, 25, 10, 40))  // 140