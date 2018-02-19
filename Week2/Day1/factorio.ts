'use strict'
// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(total:number):number {
    let fac: number = 1;
    for(let i: number = 1; i <= total; i++){
        fac = fac * i;
        
   
}
return fac;
}

console.log(factorio(6));