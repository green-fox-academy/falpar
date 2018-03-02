'use strict'

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).



function bunniesEars(bunnyNumber: number) {
    let ears:number = 0;
    if(bunnyNumber < 1) {
        return ears;

    }else{
        ears += 2;
        bunnyNumber -= 1;
        return ears += bunniesEars(bunnyNumber);
    }
    
}
console.log(bunniesEars(10));



