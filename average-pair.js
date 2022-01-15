"use strict";

/**Accepts a sorted array of numbers and a target average.  
 * averages the sum of two value pairs and
 * returns true if equivalent to the target.
*/
function averagePair(nums, trgtAverage) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let average = (nums[left] + nums[right]) / 2;
        
        if (trgtAverage === average) {
            return true;
        } else if (trgtAverage > average) {
            left++;
        } else {
            right--;
        }

    }
    return false;
}
