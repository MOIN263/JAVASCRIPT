// While loop

// printing numbers from one to ten

let i = 0
while(i<=10){
    console.log(i)
    i++
}

// printing the numbers in reverse ten to one 

let j = 10
while(j>=1){
    console.log(j)
    j--
}

// A array contains the countries and they are lower case and we need the new arr with the countries in uppercase 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']

let k = 0
let newArr = []
while(k<countries.length) {
    newArr.push(countries[k].toUpperCase())
    k++
}
console.log(newArr)