
// trings
// Strings are texts, which are under single , double, back-tick quote

let firstName = 'smuf'
let lastName = "codes"
let fav = `JavaScript`

console.log(firstName,lastName,fav);
console.log(typeof(firstName,lastName,fav));  // string

// string concatenation

console.log(firstName + lastName); // temporary

let fullName = firstName + lastName; // by defining a variable 
console.log(fullName);    

// we can also use += to assign the first variable permanently

console.log(firstName+=lastName)  // here the firstName which was smuf changes to smufcodes permenently

// if we now print the firstName then we will get 'smufcodes' as output

console.log(firstName);

let intro = 'my name is '+ firstName 
console.log(intro);

let intro2 = 'my name is '+ firstName+ 'and i am learning '+ fav
console.log(intro2);

/* Long Literal Strings
A string could be a single character or paragraph or a page. If the string length is too big it does not fit in one line. We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line. Example:*/

const multiline = 'my name is smufcodes i love coding \
i am a programmer and i am learning \
javascript .'

console.log(multiline);

// string Escape sequences 
/*
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/
// new line 

console.log('i am a coder and i love maths \n do you ?');

//  \t

console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')

// emplate Literals (Template Strings)
// To create a template strings, we use two back-ticks

console.log(`my name is ${firstName}`);

let a = 2
let b = 3
console.log(`${a} is greater than ${b}: ${a > b}`)