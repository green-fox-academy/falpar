'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication



function fourRect(a, b, c, d) {
    ctx.fillStyle ='#'+(Math.random()*0xFFFFFF<<0).toString(16)
    ctx.fillRect(a, b, c, d);
}
    let a: number = 10;
    let b: number = 10;
    let c: number = 50;
    let d: number = 50;

for(let i = 0; i < 4; i++) {
     a += (Math.random() * ((a-b)+1) + a)+1;
     b += (Math.random() * ((a-b)+1) + a)+1;
     c += 10;
     d += 10;
    fourRect(a, b, c, d);
};





