'use strict'

export function anagram(par1: string, par2:string){
     let a = par1.toLowerCase().split('').sort().join('');
     let b = par2.toLowerCase().split('').sort().join('');
    //let isAnag = true;
   // for(let i = 0; i < a.length; i++) {
        if(a === b) {
           return true;
           // isAnag = false;
        }
   // }
    // console.log(a);
    // console.log(b);
}
anagram('rail safety', 'fairy tales');