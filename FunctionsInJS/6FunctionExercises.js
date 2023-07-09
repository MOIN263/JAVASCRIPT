// declare a function fullname and print out your fullname 


function fullName() {
   console.log('smufcodes');
}

fullName();

// the other way of doing the above question id 

firstname = 'SMUF'
lastname  = 'CODES'
function fullNAme() {
   console.log(firstname + lastname );
}

fullNAme();

// declare a function fullname and now it takes firstname and lastname as a parameter and it returns your full name 

function Fullname (firstname,lastname) {
   fullname = firstname + lastname 
   return fullname;
}

console.log(Fullname('Smuf','Codes'));

