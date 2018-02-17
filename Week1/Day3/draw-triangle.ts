'use strict';




// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let lineCount: number = 4;
for( let i: number = 1; i <= lineCount; i++ ){
    let star: string = "";
    for(let j = 1; j <= i; j++){
        star += "*";
    }
    
    console.log(star);
}
