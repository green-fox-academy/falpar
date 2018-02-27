'use strict'

// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
const fs = require('fs');

function ticTacResult(parameter: string){
     let result = fs.readFileSync(parameter, 'utf-8')
     return result;
}


console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw
