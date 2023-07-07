
// Using the above countries array, find the country containing the biggest number of characters.

const countries =[
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

arr = []
for (let i=0 ; i<countries.length ; i++) {
    arr.push(countries[i].length);
}
var max = Math.max(...arr)
// console.log(max);

for (let i =0 ; i<arr.length ; i++) {
    if (arr[i] === max && arr[i] === countries[i].length) {
        console.log(countries[i]);
    }
}

// Using the above countries array, find the country containing only 5 characters.

// refer the above code 

let countryOf5Char = []
for (let i =0 ; i<arr.length ; i++) {
    if (arr[i] === 5 && arr[i] === countries[i].length) {
        countryOf5Char.push(countries[i]);
    }
}console.log(countryOf5Char);


