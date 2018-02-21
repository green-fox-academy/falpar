'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function anOtherOne(par){
    ctx.fillStyle ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    ctx.fillRect((canvas.width / 2) - (par /2) , (canvas.height / 2)  - (par / 2), par , par);
}
    let var1:number = 200;
    for (let i = 0; i < 3; i++){
        var1-=60;
        anOtherOne(var1);
    
};

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.