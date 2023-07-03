
// Splice method in array
// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

const number = [1,2,3,4,5]
number.splice()

console.log(number); 
// since no arguments were passed all the elements will be logged

// number.splice(3);
// console.log(number);

number.splice(0,1)
console.log(number);

// Adding item to an array using push
// Push: adding item in the end. To add item to the end of an existing array we use the push method.

// syntax
const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr)
// ['item1', 'item2','item3','new item']

let fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push('apple')
console.log(fruits)   

fruits.push('lime')
console.log(fruits)   

// Removing the end element using pop
// pop: Removing item in the end.

number.pop() 
console.log(number)

// pop method removes the element from the end and to remove the element from the beginning we use shift 

const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]

// to add an element in the beginning we use the unshift method 

const numbers1=[5,4,3,2,1]
numbers1.unshift(6);
console.log(numbers1);

// to reverse an array 

numbers1.reverse();
console.log(numbers1);

// sorting the array elements 

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

webTechs.sort();
console.log(webTechs);