const word = "Hello Dayanand Kumar Kasagala Hello Dayanand";
let newWord = word.split(" ")
let array1 = [...newWord]
console.log(array1)

const strFrequency = function (stringArr) {
    return stringArr.reduce((count, word) => {
          count[word] = (count[word] || 0) + 1;
          return count;
    }, {})
  }

  console.log(strFrequency(array1))