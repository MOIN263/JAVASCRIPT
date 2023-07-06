
// developo a small script which generate array of 5 random numbers 
// console.log(Math.floor(Math.random()*10))

Arr = []
for (let i=0;i<5;i++) {
    randomnum = (Math.floor(Math.random()*10))
    Arr.push(randomnum);

}
console.log(Arr)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

Arr1 = []

for (let i=0;i<6;i++) {
    randomnum = (Math.floor(Math.random()*10))
    if (!Arr1.includes(randomnum)) {
    Arr1.push(randomnum); 
}
}console.log(Arr1);