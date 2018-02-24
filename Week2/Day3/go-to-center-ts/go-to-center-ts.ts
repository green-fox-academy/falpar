'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE


function line(x, y) {
    ctx.strokeStyle="red";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(200,50);
    ctx.stroke();
}


let a: number = 20;
let b: number = 200;

for(let i = 0; i < 3; i++) {
    a += 110;
    b += 50;
    line(a, b);
};





    


// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.