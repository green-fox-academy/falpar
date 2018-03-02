'use strict'

// Create a recursive function called `refactorio`
// that returns it's input's factorial

function refactorio(input:number){
    if(input < 1){
    return 1
    }else{
    return input * refactorio(input -1);
    }
}
console.log(refactorio(5));
