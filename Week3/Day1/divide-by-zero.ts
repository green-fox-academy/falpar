'use strict'

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide(par1:number) {
    try {
        console.log (par1 / 10); 
              
        }
    
        catch(err) {

            if(par1 === 0){
            console.log('fail' + err);
             } 
         }       
    
}
divide(0);