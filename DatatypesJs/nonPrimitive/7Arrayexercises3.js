
/*The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
 */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// sort it 
ages.sort();
console.log('minimum age :',ages[0],'maximum age :',ages[ages.length-1]);
console.log(ages)

// median 

console.log((ages[ages.length/2]+ages[ages.length/2+1])/2)

// average 

let sum=0
for (let i =0 ;i < ages.length ; i++) {
    sum+=ages[i]
}console.log("Average :",sum/ages.length);

// range 

console.log(ages[ages.length-1]-ages[0])

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

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

// console.log(countries.length);  then array contains odd number of countries so we sill add one country

countries.push('INDIA'); // adding one element in the array 


if (countries.length % 2 === 0) {
    const midIndex = countries.length / 2;
    const firstHalf = countries.slice(0, midIndex);
    const secondHalf = countries.slice(midIndex);
  
    console.log('First Half:', firstHalf);
    console.log('Second Half:', secondHalf);
  }