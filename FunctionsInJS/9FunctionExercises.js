
// density of a substance is calculated as follows : density = mass/volume. Write a function which calculates density

function Density(Mass,Volume) {
    density = Mass/Volume
    return density 
}

console.log(Density(100,25));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speedOfObject() {
   let totalDistance = 5000 //in meters
   let totalTime = 60 // in minutes
   speed = totalDistance/totalTime
return speed   
}

console.log(speedOfObject());

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function Weight(mass) {
    const gravity = 9.8
    let weight = mass * gravity
    return weight 
}

console.log(Weight(15));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function toFahrenheitConvertor(oC) {  //oC is degrees celcius
    const oF = (oC * 9/5) + 32 
    return oF
}

console.log(toFahrenheitConvertor(37));