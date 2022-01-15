"use strict";

/** Accepts two positive integers as arguments, and returns true if 
 * both integers contain same frequency of digits. 
*/
function sameFrequency(int1, int2) {
    let firstInt = frequencyCounter(int1.toString());
    let secondInt = frequencyCounter(int2.toString());

    if (Object.keys(firstInt).length !== Object.keys(secondInt).length) {
        return false;
    }

    for (let key in firstInt) {
        if (firstInt[key] !== secondInt[key]) {
            return false;
        }
    }
    return true;
}


/** standard frequency counter takes in iterable, returns key value pairs with value as counts */

function frequencyCounter(iterable) {
    let freqs = {};

    for (let val of iterable) {
        let valCount = freqs[val] || 0;

        freqs[val] = valCount + 1;
    }

    return freqs;
}