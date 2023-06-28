
// indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

let string =  'I am learning JavaScript'
console.log(string.indexOf('learning'));
console.log(string.indexOf('Learning'));

// astIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

console.log(string.lastIndexOf('JavaScript'));
console.log(string.lastIndexOf('javascript'));

// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).

console.log(string.startsWith('I'));

// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).

console.log(string.endsWith('JavaScript'));
console.log(string.endsWith('ipt'));

// search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

let string1 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string1.search('love'))          // 2
console.log(string1.search(/javascript/gi))  // 7

// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.

console.log(string1.match('love'));

// repeat(): it takes a number as argument and it returns the repeated version of the string

let name = 'smufcodes'
console.log(name.repeat(10));