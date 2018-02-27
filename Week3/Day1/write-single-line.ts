'use strict'
// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

const fs = require('fs');
let myName = 'Alpar';
//  let myFile = fs.readFileSync('my-file.txt', 'utf-8');
try{

    fs.writeFileSync('myfile.txt', 'Alpar');
    let  readFile = fs.readFileSync('myfile1.txt', 'utf-8')
    console.log(readFile);
    }catch(error){
        console.log(' Unable to write file: my-file.txt');
    }