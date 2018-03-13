'use strict'

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

function unique(list: number[]){
    let newArray: number[] = [];
    newArray = list.sort();

    for(let i: number = 0; i <= newArray.length; i++) {
        if(newArray[i] === newArray[i + 1]){
            newArray.splice(i, 1);
        }
    } return newArray;
}


//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`