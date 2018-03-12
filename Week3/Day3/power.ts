'use strict'

// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

function power(x:number, j: number){
    if(j <= 1){
        return x;
        
    }else{
        x*= power(x, j - 1);
        return x;
    }

}

console.log(power(5, 3));
