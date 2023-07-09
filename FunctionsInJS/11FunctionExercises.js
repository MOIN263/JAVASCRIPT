
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

    function checkSeason(month) {
        const monthLowerCase = month.toLowerCase();
    
        const seasons = {
            winter: ['december', 'january', 'february', 'dec', 'jan', 'feb'],
            spring: ['march', 'april', 'may', 'mar', 'apr', 'may'],
            summer: ['june', 'july', 'august', 'jun', 'jul', 'aug'],
            autumn: ['september', 'october', 'november', 'sep', 'oct', 'nov']
        };
    
        for (const season in seasons) {
            if (seasons[season].includes(monthLowerCase)) {
                return season.charAt(0).toUpperCase() + season.slice(1);
            }
        }
    
        return 'Invalid month';
    }

console.log(checkSeason('marCh'));
console.log(checkSeason('may'));
console.log(checkSeason('august'));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(Math.max(5,-10,-2));
// console.log(Math.max(-5,-15,-1));

function findMax(a,b,c) {
      
    if (a>b && a>c){
        console.log(a)
    }else if (b>c && b>a) {
        console.log(b)
    }else {console.log(c)}
}

findMax(-21,-12,-3);