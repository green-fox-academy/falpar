'use strict'


//Write a recursive function that takes one parameter: n and counts down from n

function doRecursion(par1:number) {
   let number: number = 1;
   
    if(par1 <= number){
        return number;
    }else{ 
        return number * doRecursion(number - 1);
        }
}

console.log(doRecursion(10));