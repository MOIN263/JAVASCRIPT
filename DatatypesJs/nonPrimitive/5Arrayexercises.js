
// declare an empty array 

let emparray = []
console.log(emparray);

// declare an array more than five numbers of elements 

let numbs = [6,7,8,9,10,11]
console.log('array with more than five number of elements',numbs);

// length of the above array 

console.log(numbs.length);

// get the first item then the middle then the last item of an array

console.log(numbs[0]);
console.log(numbs[numbs.length/2]);
console.log(numbs[numbs.length-1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let adArr = [1,2,true,false,'string',null,{1:'object'},[1,2,3,4]];
console.log(adArr.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);

// print the number of companies in the array 
console.log(itCompanies.length);

// print the first company ,middle and the last company
console.log('First company',itCompanies[0]);
console.log('Middle company:', itCompanies[Math.floor(itCompanies.length / 2)]);
console.log('Last company',itCompanies[itCompanies.length-1])

// Print out each company

for (let i=0;i<itCompanies.length;i++) {
    console.log(itCompanies[i])
}

// Change each company name to uppercase one by one and print them out

for (let i=0;i<itCompanies.length;i++) {
    console.log(itCompanies[i].toUpperCase())
}

