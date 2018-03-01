'use strict'
// -  Create an array variable named `nimals`
//    with the following content: `["kuty", "macsk", "cic"]`
// -  Add all elements an `"a"` at the end

let nimals = ["kuty", "macsk", "cic"];

let animals = nimals.map(function(x){
    return x + "a";
});
console.log(animals);