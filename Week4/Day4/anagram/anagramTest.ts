'use strict'
import{test} from 'tape';
import{anagram} from './anagram';

test('test if it is true or not', t=> {
    t.equal(anagram('rail safety', 'fairy tales'), true);
    t.end();
})