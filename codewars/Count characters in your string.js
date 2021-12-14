// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {
  // The function code should be here
  let obj = {}
  let arr = [...new Set(string.split(''))]
  arr.forEach(item => {
    let q = 0
    for (let i = 0; i < string.length; i++) {
      if (string[i] === item) {
        q++
      }
    }
    // console.log(`${item}: ${q}`)
    obj[item]=q
  })
  return obj;
}

let string = 'aba'


console.log(count(string))