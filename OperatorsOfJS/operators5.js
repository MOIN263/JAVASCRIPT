// special operators

// function operator

/*The function operator defines a function inside an expression.

Syntax
var1 = function( parameter1, parameter2,......parametern)
{
statement(s)
}*/

var a = 12;
var b = 14;
var x = function(a,b)
{
return a*a+2*a*b+b*b;
};
console.log("The square of "+a+ " and "+b +" is " +x(a,b));

// in operator

// The in operator is used to check whether a given property is available on an object

var employeeobj = {name:"Robert",designation:"Officer",age:"34"};
if ("designation" in employeeobj)
{
console.log('Designation property is present'); 
}
else
{
console.log('Designation property is not present'); 
}


var string1 = "w3resource"; //Declaring string object
console.log(string1 instanceof String)