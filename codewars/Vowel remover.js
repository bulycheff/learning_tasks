// Create a function called shortcut to remove all the lowercase vowels in a given string.
// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// Don't worry about uppercase vowels.

function shortcut(string){
  return string.split('').filter(l => !'euioa'.includes(l)).join('')
}

console.log(shortcut('goodbye'))