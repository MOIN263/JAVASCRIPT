
// array methods

// array constructor 

const arr = Array() // creates an an empty array
console.log(arr)

/*Creating static values with fill
fill: Fill all the array elements with a static value*/

const arr1 = Array() // creates an an empty array
console.log(arr1)

const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]
const eightEmptyValues = Array(8) 
console.log(eightEmptyValues) // [empty x 8]
console.log(eightEmptyValues.length);

// concat:To concatenate two arrays.

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList)

// indexof:To check if an item exist in an array. If it exists it returns the index else it returns -1.

console.log(firstList.indexOf(3));

// Check an element if it exist in an array.

// Check items in a list
// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('apple')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}

// using ternary operator
// index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array')

// lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7
console.log(numbers.lastIndexOf(0)) // -1
console.log(numbers.lastIndexOf(1)) //  6

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

const numbers1= [1, 2, 3, 4, 5]

console.log(numbers1.includes(5)) // true
console.log(numbers1.includes(0)) // false

// Slice array elements
// Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

  const numbers2 = [1,2,3,4,5]

  console.log(numbers2.slice()) // -> it copies all  item
  console.log(numbers2.slice(2)) 
  console.log(numbers2.slice(0, numbers.length)) // it copies all  item
  console.log(numbers2.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position
