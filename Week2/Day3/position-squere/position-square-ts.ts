'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function newFunc(part1, part2) {
    ctx.fillStyle = 'red';
    ctx.fillRect(part1, part2, 50, 50);
};

let cat1: number = 2;
let cat2: number = 70;

for(let i = 0; i < 3; i++) {
    cat1 += 8;
    cat2 += 70;
    newFunc(cat1, cat2);
} 