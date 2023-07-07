
// Copy countries array(Avoid mutation)

let countries = [
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
// Using the Spread Operator:
const countriesCopy = [...countries];
console.log(countriesCopy)
// Using the Array.from() method:
const countriesCopy1 = Array.from(countries);
console.log(countriesCopy1)

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

sortedArray = countriesCopy1.sort()
console.log(sortedArray);
