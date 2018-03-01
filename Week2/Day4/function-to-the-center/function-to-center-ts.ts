'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function lineDraw(x:number, y:number){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(300, 200);
    ctx.stroke();
}
let a: number = 0;
let b: number = 0;


for(let i = 0; i <= canvas.width / 20; i++) {
    lineDraw(a, 0)
    a = a + 20; 
    console.log(i);
}

for(let i = 0; i <= canvas.height / 20 ; i++) {
   
    lineDraw(0, b)
    b = b  + 20; 
    
}
 b = 0;

for(let i = 0; i <= canvas.height / 20; i++) {
    lineDraw(600, b)
    b = b + 20; 
}

a = 0;

for(let i = 0; i <= canvas.width / 20; i++) {
    lineDraw(a, 400)
    a = a + 20; 
}







// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.