
// A function is a reusable block of code or programming statements degined to perform a certain task 

// in Js function is declared by the function keyword folled by the name of the function followed by the () which takes parameters . if a function takes a parameter then it will called with an argument.

// A function can be declared or created in ciuple of ways:

 // -Declaration function
 // -Expression function
 // -Anonymous Function 
 // -Arrow function


//  function declaration 

// syntax 

//declaring a function without a parameter
// function functionName() {
  // code goes here
// }
// functionName() // calling function by its name and with parentheses

// function without a parameter and run

// write a function to get the square of thet number

function numSquare() {
    let num = 25
    let sqr = num*num
    // printing the output 
    console.log(sqr);
}

// calling the function
numSquare();

// wirte a function to get the sum of two number given

function numSum() {
    let num1 = 23
    let num2 = 42
    let sum = num1 + num2
    // printing the output 
    console.log(sum);
}

// calling the function 
numSum();

// write a function to print the fullname 

function printFullName (){
    let firstName = 'Smuf'
    let lastName = 'codes'
    let space = ' '
    let fullName = firstName + space + lastName 
    console.log(fullName)
}

// calling the function

printFullName();

/*While console.log() is helpful for logging information and inspecting values during development, it's important to remember that it's primarily a debugging tool. Once you've confirmed that your function is working as intended, using return to pass values provides clearer and more reusable code.*/

// Function returning value 

// write a function to multiply the given two numbers by returning the values but not returning it 

function numMul() {
    let numb1=25
    let numb2 = 5
    let multp = numb1*numb2
    return multp
}

// calling the function

// numMul(); if you just call it .it doesnot show any output 
// to get the out you should print the function
console.log(numMul());

// function to add the numbers by returning the values

function addNums() {
    let numb1 =2347597
    let numb2 = 21846
    let total = numb1+numb2
    return total
}

console.log(addNums());