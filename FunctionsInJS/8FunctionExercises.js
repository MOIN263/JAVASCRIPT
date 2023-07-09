// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function cirArea () {
    pi = Math.PI
    radius = 7
    area = pi*radius*radius
    return area
}

console.log(cirArea());

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function cirCumference(r) {
    pi = Math.PI
    circumferenceofcircle = 2*pi*r
    return circumferenceofcircle
}

console.log(cirCumference(24));

