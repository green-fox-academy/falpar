'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
//github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
//19

function purpleSteps(x: number, y:number, ){
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y,  15, 15);
}
let a: number = 0;
let b: number = 0;
let 

for(let i = 0; i < 19; i++){
    a += 15;
    b += 15;
    purpleSteps(a,b);
}   
