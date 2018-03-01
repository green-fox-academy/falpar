

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let star: string = "*";
let space: string = " ";

for(let i: number = 1; i <= lineCount; i++ ){
    let pyramid = '';

    for(let j:number = (lineCount-1); j >= 1; j--){
        pyramid += space;
    }
    for(let k: number = 1; k <= ((i*2)-1); k++) {
        pyramid += star;
       
    }
    
    console.log(pyramid);
}

