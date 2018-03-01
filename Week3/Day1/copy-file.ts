'use strict'

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copyFile(fileNameFrom: string, fileNameTo: string){
    let newFile1 = fs.readFileSync(fileNameFrom, 'utf-8');
    let writeFile = fs.writeFileSync(fileNameTo, newFile1 );
    
};

copyFile('newFile.txt', 'multi-line.txt');