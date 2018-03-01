'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['kuty', 'macsk', 'kacs', 'rók', 'halacsk'];

function appendA(allat: string[]) {
    let a:number = allat.length;
    for(let i = 0; i < a; i++) {
        allat[i]+= 'a';
    }
     return allat;
}

console.log(appendA(far));
