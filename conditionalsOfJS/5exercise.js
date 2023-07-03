// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F


const score = 75;
let grade;

if (score >= 80 && score <= 100) {
  grade = 'A';
} else if (score >= 70 && score < 80) {
  grade = 'B';
} else if (score >= 60 && score < 70) {
  grade = 'C';
} else if (score >= 50 && score < 60) {
  grade = 'D';
} else if (score >= 0 && score < 50) {
  grade = 'F';
} else {
  grade = 'Invalid score';
}

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);


// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const month = 'March';
let season;

if (month === 'September' || month === 'October' || month === 'November') {
  season = 'Autumn';
} else if (month === 'December' || month === 'January' || month === 'February') {
  season = 'Winter';
} else if (month === 'March' || month === 'April' || month === 'May') {
  season = 'Spring';
} else if (month === 'June' || month === 'July' || month === 'August') {
  season = 'Summer';
} else {
  season = 'Invalid month';
}

console.log(`Month: ${month}`);
console.log(`Season: ${season}`);
