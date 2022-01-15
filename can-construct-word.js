/**takes in two strings, one word and one a series of letters. 
 * Compares the contents of the letters with the word 
 * to see if the word can be constructed from the given letter 
 * returns boolean
 * assumes both strings contain only lowercase letters */
function canConstructWord(word, letters) {
    let wordCounts = frequencyCounter(word.split(""));
    let letterCounts = frequencyCounter(letters.split(""));

    for(let letter of word){
        if(!(letterCounts[letter] >= wordCounts[letter])){
            return false;
        }
    }

    return true;
}

/** standard frequency counter takes in array, returns key value pairs with value as counts */

function frequencyCounter(arr){
    let freqs = {};

    for(let val of arr){
        let valCount = freqs[val] || 0;

        freqs[val] = valCount + 1;
    }

    return freqs;
}
