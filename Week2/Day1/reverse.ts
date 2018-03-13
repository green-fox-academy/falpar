'use strict'

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
// 	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

let numL: number[]= [3, 4, 5, 6, 7];
//console.log(numL)
// let reversed: number[] = numL.reverse();
// console.log(reversed);
let tempArray = [];
for(let i = 0; i < numL.length; i++){
    let newArray = tempArray.push(numL.reverse());
  
}
console.log(tempArray);