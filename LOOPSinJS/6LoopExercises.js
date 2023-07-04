// Write a loop that makes the following pattern using console.log():

// #
// ##
// ###
// ####
// #####
// ######
// #######

let patrn = ''
let noofrows = 7

for (let i =1 ;i<=7 ; i++) {
    patrn+='#'
    console.log(patrn)

}

// Use loop to print the following pattern:

    // 0 x 0 = 0
    // 1 x 1 = 1
    // 2 x 2 = 4
    // 3 x 3 = 9
    // 4 x 4 = 16
    // 5 x 5 = 25
    // 6 x 6 = 36
    // 7 x 7 = 49
    // 8 x 8 = 64
    // 9 x 9 = 81
    // 10 x 10 = 100


for (let i = 0 ;i<=10 ; i++) {
    console.log(`${i} x ${i} = ${i*i}`)
}

// Using loop print the following pattern

    // i    i^2   i^3
    // 0    0     0
    // 1    1     1
    // 2    4     8
    // 3    9     27
    // 4    16    64
    // 5    25    125
    // 6    36    216
    // 7    49    343
    // 8    64    512
    // 9    81    729
    // 10   100   1000

for (let i=0 ; i<=10 ; i++) {
    console.log(`${i}     ${i**2}   ${i**3}`)
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let i =0 ;i<=100;i++) {
    if (i%2==0) {
        console.log(i)
    }
}

// // Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i=0 ; i<=100 ; i++) {
    if (i%2!=0) {
        console.log(i)
    }
}

