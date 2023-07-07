// In the countries array, check if there is a country origin countries containing the word 'land' . If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

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

let countrieswithland =[];
let countrieswithoutland = [];

for (let i=0 ;i<countries.length ; i++) {
    if (countries[i].includes('land')) {
        countrieswithland.push(countries[i]);
    } else {
        countrieswithoutland.push(countries[i]);
    }
}
console.log(`${countrieswithland} this countries have land in their name`);
console.log(`${countrieswithoutland} this countries don't have land in there name.`)

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']


let countrieswithIA =[];
let countrieswithoutIA = [];

for (let i=0 ;i<countries.length ; i++) {
    if (countries[i].includes('ia')) {
        countrieswithIA.push(countries[i]);
    } else {
        countrieswithoutIA.push(countries[i]);
    }
}
console.log(`${countrieswithIA} this countries have 'ia' in their name`);
console.log(`${countrieswithoutIA} this countries don't have 'ia' in there name.`)