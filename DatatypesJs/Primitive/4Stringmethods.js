
// String methods 

// Everything in JavaScript is an object. A string is a primitive data type that
//  means we can not modify it once it is created. The string object has many string methods.

// length 

// length gives you number of letter a string literal contains

let fullName = 'Smufcodes'
console.log(fullName);
console.log(fullName.length);

let js = 'javaScript'
console.log(js.length);
console.log(js);

// Accessing characters in a string:
//  We can access each character in a string using its index. In programming, counting starts from 0.

console.log(js[0]);  // j 
console.log(js[4]); // S

let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex]) 

// toUpperCase()

// chages all the lowercase letters to the uppercase

console.log(string.toUpperCase());

// toLowerCase(): 

// changes all the uppercase letters in the string to lowercase
let string1 = 'JAvaScripT'
console.log(string.toLowerCase());

// substr(): 

// this method takes two arguments . the starting index and number of elements to slice 

console.log(string1.substr(2,4));

// split(): The split method splits a string at a specified place.

let fullName1 = 'smufcodes'
console.log(fullName1.split()); // takes string and does splits it just gives us an array with same string
console.log(fullName1.split(' '));

let countries =  'Finland Sweden Norway Denmark and Iceland'
console.log(countries.split(' '));
console.log(countries.split(','));// this will not have any output as there is no comma in the string
// now let us apply the same with adding commas

let countries1 = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries1.split(', '));

// trim(): Removes trailing space in the beginning or the end of a string.

let name = '   smuf codes   '
console.log(name.trim(' '))

// includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.

let string3 = 'javaScript is dynamic programming language'

console.log(string3.includes('javascript'));
console.log(string3.includes('programming '));

// replace(): takes as a parameter the old substring and a new substring.

console.log(string3.replace('javaScript','python'));

// charAt(): Takes index and it returns the value at that index

console.log(string3.charAt(6));

// charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index

console.log(string3.charCodeAt(4));

