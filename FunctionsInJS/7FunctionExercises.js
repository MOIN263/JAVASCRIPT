
// Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(n,m){
    sum = m+n
    return sum

}

console.log(addNumbers(5,123456));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// without taking parameters

length = 55
breadth =24
function rectArea() {
    area = length * breadth
    return area
}

console.log(rectArea());

// by taking parameters 

function rectArea1(l,b){
    area = l*b
    return area
}

console.log(rectArea1(20,10));


// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function rectPeri(l,b) {
    perimeter = 2*(l+b)
    return perimeter
}

console.log(rectPeri(90,60));


// A volume of a rectangular prism is calculated as follows = length x width x height. write a function which calculates volumeofrectprism

function volumeofRectPrism(length,width,height) {
    volume = length*width*height
    return volume
}

console.log(volumeofRectPrism(25,20,30))
   
