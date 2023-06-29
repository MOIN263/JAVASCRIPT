
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(string.split(','));

// Cut (slice) out the first word of the string using substr() or substring() method

console.log(string.substr(0,8));
console.log(string.substring(0,8));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let string1 = 'You cannot end a sentence with because because because is a conjunction'
console.log(string1.indexOf('b'));

console.log(string1.lastIndexOf('n'));

console.log('my name is'.concat(' smufcodes'));

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let numbr = 10
let str1 = '10'
console.log(numbr===str1); // false 
// to rectify it we have two methods 

console.log(numbr===Number(str1)); //first approach
console.log(numbr.toString()===str1); // second approach

const strin1 = 'python';
const string2 = 'jargon';

const foundInString1 = strin1.includes('on');
const foundInString2 = string2.includes('on');

console.log(foundInString1);  // true
console.log(foundInString2);  // true

/*Generate a random number between 0 and 100 inclusively.

Generate a random number between 50 and 100 inclusively.

Generate a random number between 0 and 255 inclusively.*/

const randomNumber1 = Math.floor(Math.random() * 101); // Generates a random number from 0 to 100

console.log(randomNumber1);

const randomNumber2 = Math.floor(Math.random() * 51) + 50; // Generates a random number from 50 to 100

console.log(randomNumber2);

const randomNumber3 = Math.floor(Math.random() * 256); // Generates a random number from 0 to 255

console.log(randomNumber3);

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

const sentence = 'You cannot end a sentence with because because because is a conjunction';

const extractedPhrase = sentence.substr(31, 23);

console.log(extractedPhrase);

