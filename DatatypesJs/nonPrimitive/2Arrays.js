
// creating an array using split

let language = 'javaScript'
console.log(language.split(''));

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

// accessing values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers.length) 
console.log(numbers)         
console.log(numbers[0])      
console.log(numbers[5])      

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ] // List of countries
  
  console.log(countries)      // -> all countries in array
  console.log(countries[0])   //  -> Albania
  console.log(countries[7])  //  -> hungary
  
  let lastIndex = countries.length - 1;
  console.log(countries[lastIndex]) //  -> Kenya

//   arrays are mutable 
// modifying an array

let arr = ['a','b','c','d','e','f','g','h','i','j']
arr[0]='q' //replaces a with q
arr[7]='w' //replaces h with w
console.log(arr)



