
// in programming language to carry out yhe repetitive task we use different kinds of loops

// for Loop
// For loop structure
// for(initialization, condition, increment/decrement){
  // code goes here
// }

// printing the numbers from one to ten

for (let i=1 ;i<=10;i++) {
    console.log(i)
}

// printing the numbers in reverse ten to one 

for (let i=10 ; i>=1 ; i-- ) {
    console.log(i)
}

// A array contains the countries and they are lower case and we need the new arr with the countries in uppercase 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

// adding all the elements in the array 

const numbs = [1,2,3,4,5,6,7,8,9,10]

let sum = 0
for (let i=0 ; i<numbs.length ; i++ ) { 
    sum+=numbs[i]

} console.log(sum)

// consider an array having a list of numbers from one to ten now using for loop create an array using forloop which should have the num**2

let NewArr = []

for (let i =0;i<numbs.length;i++) {
    NewArr.push(numbs[i]**2)
}
console.log(NewArr)