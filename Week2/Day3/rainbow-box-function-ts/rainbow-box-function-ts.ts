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
    square(i*100, colors[i]);
}




