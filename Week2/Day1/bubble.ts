import { FORMERR } from "dns";

'use strict'

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `True` sort that list descending
//  Example:



function bubble(par: number[], a: boolean) {
  if(a === false) {
      return par.sort((b, c)=> b - c);
  }else{
      return par.sort(((b, c)=> c - b));
  }
  
}



console.log(bubble([34, 12, 24, 9, 5], true));
console.log(bubble([34, 12, 24, 9, 5], false));

//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5]));
//  should print [34, 24, 12, 9, 5]