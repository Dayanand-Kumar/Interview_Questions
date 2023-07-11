const strFrequency = function (stringArr) {
  return stringArr.reduce((count, word) => {
        count[word] = (count[word] || 0) + 1;
        return count;
  }, {})
}


//usecase1. If an Array is given
let names = ["Bob", "Bill", "Bo", "Ben", "Bob", "Brett", "Ben", "Bill", "Bo", "Ben", "Bob", "Ben"];

console.log(strFrequency(names));

//usecase2. If a string is given
let sentence = 'The quick brown fox jumps over the lazy dog.';
let sentenceArray=sentence.split(' '); //convert to array of words using split() method and space
// console.log("String input: ", [...sentenceArray]);
console.log(strFrequency([...sentenceArray]))
