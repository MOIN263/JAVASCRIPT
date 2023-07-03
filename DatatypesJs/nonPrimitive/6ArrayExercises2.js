// First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// Remove punctuation
let cleanedText = text.replace(/[^\w\s]/g, '');

// Change string to an array
let words = cleanedText.split(' ');

console.log(words);
console.log('Number of words:', words.length);

/*In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' */

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("Meat");
shoppingCart.pop('Honey');
shoppingCart.push('Sugar');
shoppingCart[3]='Green Tea';

console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

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
  ];
  
  if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
  } else {
    countries.push('Ethiopia');
  }

  
//   In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

if (webTechs.includes('Saas')) {
    console.log('Sass is a CSS preprocess')
}
else {
    webTechs.push('Sass')
}console.log(webTechs)