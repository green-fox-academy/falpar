'use strickt'
// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result

function sum(total: number) {
    let numX= 0;
    for(let i: number = 0; i <= total; i++){
        numX += i;
    }
    return numX;
}
console.log(sum(4));