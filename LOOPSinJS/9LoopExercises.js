
// Develop a small script which generate a six characters randomid :

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz'
let randomId = '';

for (let i=0 ; i<=4; i++ ) {
    randomIndex = Math.floor(Math.random()*characters.length);
    randomId += characters.charAt(randomIndex);
}

console.log(randomId)

// Using the above countries array, create the following new array.

const countries = [
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

NewArr = []
for (let i=0 ; i<countries.length ; i++) {
     NewArr.push(countries[i].toUpperCase())
}
console.log(NewArr);

// using the above countries array ,create an array for countries lenth

NewArr1 = []
for (let i=0 ; i<countries.length ; i++) {
     NewArr1.push(countries[i].length)
}
console.log(NewArr1);

// Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]

const countries1 = [
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

let Arr2=[]
for (let i=0 ;i<countries1.length; i++) {
    arr1=[countries1[i],countries1[i].toLocaleUpperCase().slice(0,3),countries1[i].length];
    Arr2.push(arr1);
}

console.log(Arr2);

