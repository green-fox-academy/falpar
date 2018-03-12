'use strict'

export function anagram(par1: string, par2:string){
    let a = par1.toLowerCase().split('').sort().join();
    let b = par2.toLowerCase().split('').sort().join();
   let isAnag = false;
  for(let i = 0; i < a.length; i++) {
         isAnag = true;
         return isAnag;
        }
       
 }
console.log(anagram('rail safety', 'fairy tales'));
