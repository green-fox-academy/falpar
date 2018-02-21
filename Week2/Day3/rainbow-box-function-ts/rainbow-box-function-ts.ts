'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function square(seize: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect((canvas.width / 2 - seize / 2), (canvas.height / 2 - seize / 2), seize, seize);
}  


let colors: string[] = ['purple', 'violet', 'blue', 'green', 'yellow', 'orange','red'];

for(let i = 6; i > 0; i--) {
    square(i*50, colors[i]);
}




// function rainBow(par1, par2){
//     // ctx.fillStyle ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
//     ctx.fillRect((canvas.width / 2) - par2 / 2, (canvas.height / 2) - par2, par2, par2);

// } 
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.