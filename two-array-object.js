"use strict";

/** takes in two arrays, and returns an object with 
 * keys from the first array and values from 
 * the last array */

function twoArrayObject(keys, values) {
    let pairs = {};

    for (let i = 0; i < keys.length; i++) {
        console.log(`value at ${i}: ` + values[i]);
        if (values[i] === undefined) {
            pairs[keys[i]] = null;

        } else {

            pairs[keys[i]] = values[i];
        }
    }

    return pairs;
}
