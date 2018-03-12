'use strict'

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function recoursiveNr(num: number): number {
    // console.log(num);
    // console.log()
    if(num <= 1){
        return num;
    }else{
        return num + recoursiveNr(num - 1)
    }
}
console.log(recoursiveNr(2));