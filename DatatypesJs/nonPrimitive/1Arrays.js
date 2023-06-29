
// ARRAYs

// arrays can store multiple values .each value in the array has an index 
// each index has refrence in memory address which can be accessed using indexes

// arrays are MUTABLE and can have dufferent datatypes in it 

// creating an empty array

// syntax
const arr = Array()
// or
// let arr = new Array()
console.log(arr) // []

// syntax
// This the most recommended way to create an empty list
const arr1 = []
console.log(arr1)

// array with values

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] 
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']



console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

// arrays can have diffrent datatypes
// datatype in javascript are booleans ,numbers ,strings,arrays and object

let arr2 = [ 7,20,100,true,false,'smufcodes',[1,2,3,4,5,6],{'name':'smufcodes','language': 'JavaScript'}]
console.log(arr2);
// and each element the array can be accessed using their index
console.log(arr2[7]);
// if you need name from that object 
console.log(arr2[7].name)

