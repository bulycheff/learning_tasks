// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

const isPalindrome = function (x) {
  return parseInt(x.toString().split('').reverse().join('')) === x
}

// const isPalindrome = function (num) {
//   let x=num, pal = 0
//   if (x < 0) return false
//   while (x > 0) {
//     pal = pal * 10 + x % 10
//     x = Math.floor(x / 10)
//     console.log({ pal, x })
//   }
//   return num === pal
// }

console.log(isPalindrome(6556))

