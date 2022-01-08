/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    const results = new Map();
    const keepTrackOfWords = [];

    //takes each word from the words Array and adds each unique character in each word to Map key
    words
        .forEach((word)=>{
            let charSet = new Set();
            let alphaChar = word.toLowerCase().split("").sort().join("");
            for (let char of alphaChar) {
                charSet.add(char);
            }
            let uniqueChars = [...charSet]; //now uniqueChars.join("") returns the string in alphabetical order
            if (results.has(uniqueChars.join(""))){
                keepTrackOfWords.push(word.toLowerCase());
                results.set(uniqueChars.join(""), word.toLowerCase());
            } else {
                results.set(uniqueChars.join(""), word.toLowerCase());
            }
        })
        //if sorted string of letters is a key in the results Map then
            //add word to the array associated with that key
        //else
            //make a new entry in the results Map with key = sorted string of letters
    return results;
}

console.log(sameLetters(["pAir", "PER", "POlE", "peaR", "pEEr", "REap", "loPE"]));

//--------------EXPECTED-------------//
//  {   "aipr": ["pair"],
//     "elop": ["pole", "lope"],
//     "aepr": ["pear", "reap"],
//     "epr": ["per", "peer"]
//   }

module.exports = sameLetters;
