
// Booleans
// A boolean data type represents one of the two values:true or false

let lightison =true ;
let lightsoff = false;
let compr = 45 > 32 ;

console.log(lightison);
console.log(lightsoff);
console.log(compr);

/* Truthy values
All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true


Falsy values
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string */

// Undefined
// If we declare a variable and if we do not assign a value, the value will be undefined. In addition to this, if a function is not returning the value, it will be undefined.

let firstName
console.log(firstName) //not defined, because it is not assigned to a value yet

// Null
let empty = null
console.log(empty) // -> null , means no value