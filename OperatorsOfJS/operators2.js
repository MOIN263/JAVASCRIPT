// Increment Operator
// In JavaScript we use the increment operator to increase a value stored in a variable. The increment could be pre or post increment. Let us see each of them:

// Pre-increment
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
//Post-increment
let count1 = 0
console.log(count1++)        // 0
console.log(count1)          // 1

// Decrement Operator

//Pre-decrement
let counter = 0
console.log(--counter) // -1
console.log(counter)  // -1
//Post-decrement
let count2 = 0
console.log(count2--) // 0
console.log(count2)   // -1

// ternary opertors

/* Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following examples:*/

let isRaining = true
isRaining
  ? console.log('You need a rain coat')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

// ------------------------------------------------------------------------------

  let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)