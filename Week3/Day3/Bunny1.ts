'use strict'

// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function bunnies(x) {
    let ears = 0;
    if(x <= 1) {
        return ears;

    }