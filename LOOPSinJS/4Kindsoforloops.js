
// for of loop 

// we use for of loop for arrays . it is very hand way to iterate through an array 
// if we are not interested in the index of each element in the array

// syntax
// for (const element of Array){
    // code
// }

let array = [1,2,3,4,5,6,7]

for (const num of array ){
    console.log(num*5);
}

// sum of all the elements in the array

let sum =0
for (const num of array ){
    sum+=num
}console.log(sum); //28

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  for (const tech of webTechs) {
    console.log(tech.toUpperCase())
  }

//   for in loop 

// for in loop is used to iterate over the properties of an objects 

let object = {'name':'smufcodes',
'age' : 34 , 'OS' : 'Ubuntu' , 'lang' : "javaScript" }

for (let key in object ){
    console.log(`the ${key} of the object is ${object[key]}`)
}

// forEach this method is available on arrays and allows you to execute a provided function for each element in the array 

let array1 = [12, 42, 5, 53, 7, 43, 67, 32];

array1.forEach(function(element, index) {
  array1[index] += 22;
});

console.log(array1);
