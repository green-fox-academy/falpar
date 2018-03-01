
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let xMoveTo = 80;
let xLineTo =0;
let yLineTo = 0;

function drawLine(x, y, z, u){
 	ctx.strokeStyle = "purple";
	ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(z, u);
	ctx.stroke();
}

for (let i = 0; i < 20; i++){
	drawLine(xMoveTo, 0, canvas.width, yLineTo);
	xMoveTo = xMoveTo + 30;
	yLineTo = yLineTo + 20; 
}


function drawLine2(x, y, z, u){
	ctx.strokeStyle = 'green';
	ctx.beginPath();
 	ctx.moveTo(x, y);
 	ctx.lineTo(z, u);
 	ctx.stroke();
}


 let yMoveTo2 = 50;
 let xLineTo2 = 0;
 let yLineTo2 = 0;

for (let i = 0; i < 40; i++){

 drawLine2(0, yMoveTo2, xLineTo2, canvas.height);
 xLineTo2 = xLineTo2 + 20; 
 yMoveTo2 = yMoveTo2 + 12;
 
}