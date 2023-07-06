// use for loop to itereate from 0to100 and print sum of all numbers
let sum = 0
for(let i = 0 ; i<=100 ; i++) {
  sum+=i;
}console.log(sum);

// get the sum of all even numbers between 0 and 100

let sumeven= 0
for(let i = 0 ; i<=100 ; i++) {
  if (i%2==0){
  sumeven+=i;
}

}console.log(sumeven)
// get the sum of all even numbers between 0 and 100

let sumodd= 0
for(let i = 0 ; i<=100 ; i++) {
  if (i%2!=0){
  sumodd+=i;
}

}console.log(sumodd)

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

let Arr = []
let sumE = 0
let sumO = 0

for (let i = 0;i<=100;i++) {
  if (i%2==0) {
    sumE+=i;
  } else {
    sumO+=i
  }
}
Arr.push(sumE)
Arr.push(sumO)
console.log(Arr);