'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/greenfox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]

  function newFunc(x:number, y:number) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, x, y, y);

}

    let x: number = 15;
    let y: number = 15;


for(let i = 0; i < 6; i++) {
    newFunc(x, y);
    x = x + y;
    y = y+15;
 }


