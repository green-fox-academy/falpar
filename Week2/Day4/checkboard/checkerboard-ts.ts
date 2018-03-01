'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function draw() {
for(let x: number = 0; x < 9; x++){
    for(let y:number = 0; y < 9; y++){
        if(x % 2 === y % 2) {
            ctx.fillStyle = "black";
            ctx.fillRect(64*x, 64*y,64, 64);
        }else{
            ctx.fillStyle = 'white';
            ctx.fillRect(64*x, 64*y, 64, 64);
            }
        }
    }   
}
draw();


