// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let acronym = ''
for (let i=0 ; i<mernStack.length ;i++) {
    indexletters=mernStack[i][0];
    acronym+=indexletters;

}acronym=acronym.toUpperCase()

console.log(acronym);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

const webtechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

for (element of webtechs) { console.log(element)}

// this is a fruit array ,['banana','orange','mango','lemon'] reverse the array with loop without usu=ing the reverse method

let fruits =['banana','orange','mango','lemon']
let fruits1= []
for (let i=fruits.length-1;i>=0 ; i--) {
    fruits1.push(fruits[i])
}
console.log(fruits1)

// Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  // Loop through the outer array
  for (let i = 0; i < fullStack.length; i++) {
    // Loop through the inner array
    for (let j = 0; j < fullStack[i].length; j++) {
      console.log(fullStack[i][j]);
    }
  }
  