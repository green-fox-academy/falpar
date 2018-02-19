let lineCount: number = 4;


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for( let i: number = 1; i <= lineCount; i++ ){
    let star: string = "";
    for(let j = 1; j <= i; j++){
        star += "*";
        for(let k: number = 1; k <= i; k++) {
            star += "*";
    }
    }
    
    console.log(star);
}