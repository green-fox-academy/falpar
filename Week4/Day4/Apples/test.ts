'use strict';
import {test} from 'tape';
import{ Apple} from './apples';

test('return apple', t => {
    let anApple = new Apple();
    t.equal(anApple.getApple(), 'apple');
    t.end();
});

