
// Functions With Default Parameters
// sometimes we pass default values to parameters,when we invoke the function if we do not pass an argument the default value will be used 

// syntax
// declaring a function 
// function functionName(param = value) {
    // code goes here
// }

// calling Function 
// functionName();
// functionName(arg);

function Greet(name= 'smuf') {

    let greetings = `hello ${name} how are you?`
    return greetings
}

console.log(Greet());
console.log(Greet('Junaid'));

function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
  }
  
  console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
  console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon