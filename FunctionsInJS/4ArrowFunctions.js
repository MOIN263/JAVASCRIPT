
// Arrow Function
// Arrow function is an alternative to write a function

// Arrow function uses arrow instead of the keyword function to declare a function.

// normal function declaration to get the square of number

function Square(n) {
    return n * n
}

console.log(Square(25));

const square = n => {
    return n * n
}

console.log(square(23));
// if you just have one line of code then arrow function can more easily be written as

const sQare = n => n*n 
console.log(sQare(24))

// write an arrow function to change all the elements in the array into the uppercase 

const changeToUppercase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const arr = ['smufcodes','Javascript','programming','functions','loops']

console.log(changeToUppercase(arr));

const printFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
  console.log(printFullName('smuf','codes'))
//   The above function has only the return statement, therefore, we can explicitly return it as follows.
  
  const printFullName1 = (firstName, lastName) => `${firstName} ${lastName}`
  
  console.log(printFullName('Smuf', 'Codes'))