'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function sweets(param: string[]){
    param.forEach(function(item, index){
        if (typeof param[index] === 'number') {
            param[index] = "Croissant";
            return param;
        } else if(typeof param[index] === 'boolean'){
            param[index] = "Ice cream";
            return param;
        }
    });
    return param;
}
console.log(sweets(shopItems));
// function sweets(arr: any[]){
//     arr.map(function(value, index){
//         if(typeof arr[index] === 'number'){
//             arr[index] = 'Croissant';
//             return arr;
//         }else if(typeof arr[index] === 'boolean'){
//             arr[index] = 'Ice cream';
//             return arr; 
//         }
//         return arr;
//     });
//     return arr;
// }








