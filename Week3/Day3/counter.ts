'use strict'


//Write a recursive function that takes one parameter: n and counts down from n

function doRecursion(number:number) {
   
    console.log(number);
    if(number <= 1){
        return number;
    }else{ 
        return number - doRecursion(number - 1);
    }
}

doRecursion(10);