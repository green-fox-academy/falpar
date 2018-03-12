'use strict'

export function anagram(par1: string, par2:string){
     let a = par1.toLowerCase().split('').sort().join('');
     let b = par2.toLowerCase().split('').sort().join('');
        if(a === b) {
           return true;
        }else{
            return false;
        }
}
console.log(anagram('rail safety', 'fairy tales'));