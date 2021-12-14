// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  // The function code should be here
  let count = {}
  string.split('').forEach(l => count[l] ? count[l]++ : count[l] = 1)
  return count
}

let string = 'hello'


console.log(count(string))