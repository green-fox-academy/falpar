'use strict'
import {test} from 'tape';
import{SumOfInt} from './sum'

test('sum of list elements', t=>{
    let sumList = new SumOfInt();
     t.equal(sumList.sum([3,10,4]), 17);
     t.equal(sumList.sum([]),0);
     t.equal(sumList.sum(['Alpar']), 0);
     t.equal(sumList.sum([1]), 1);
    
    t.end();
})