'use strict'

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function lineCount(fileName: string): number {
    try {
        let newFile = fs.readFileSync(fileName, 'utf-8');
        let line = 1;
        for(let i = 0; i < newFile.length; i++) {
            if(newFile[i] == '\n'){
                line++;
            }
        }
        return line;
    } catch (err) {
        return 0;
    }
}

console.log(lineCount('newFilde.txt'));
