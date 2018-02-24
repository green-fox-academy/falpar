'use strict';
// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"
//console.log(putSaturn(planetList));
// export = putSaturn;
let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];
let planetX: string = 'Saturn';

function putSaturn(x){
    let total  = planetList.concat(x);
    return total;
}
console.log(putSaturn(planetX));