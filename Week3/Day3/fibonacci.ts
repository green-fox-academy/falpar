'use strict'

//The fibonacci sequence is a famous bit of mathematics, and it happens to
// have a recursive definition. The first two values in the sequence are
// 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the
// previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21
// and so on. Define a recursive fibonacci(n) method that returns the nth
// fibonacci number, with n=0 representing the start of the sequence.

let a: number  = 0;
let b: number = 1;
let sum: number;
let c: number = 0;
function fibonacci(n: number): number{
    if(n === 0) {
        return 0
    }
    if(n === 1){
        return 1;
    }
    sum = a + b;
    a = b;
    b = sum;
    c++;
    if(c ===n - 1) {
        return sum;
    }
    return fibonacci(n);
}
console.log(fibonacci(10));