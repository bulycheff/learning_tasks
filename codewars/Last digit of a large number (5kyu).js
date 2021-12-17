// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of a^b
// Note that aaa and bbb may be very large!
// Examples
// lastDigit("4", "1")            // returns 4
// lastDigit("4", "2")            // returns 6
// lastDigit("9", "7")            // returns 9
// lastDigit("10","10000000000")  // returns 0
// lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376")  // returns 0

let str1 = '1606938044258990275541962092341162602522202993782792835301376'
let str2 = '2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376'

var lastDigit = function (str1, str2) {

  if (str2 === '0') return 1

  let num = str1.split('').reverse()[0]
  num = num / 1

  let exp = (str2.split('').reverse()[1] ? str2.split('').reverse()[1] : '') + str2.split('').reverse()[0]
  exp = parseInt(exp) % 4
  exp = exp === 0 ? 4 : exp

  let res = num

  for (let i = 2; i <= exp; i++) {
    res = res * num % 10
  }

  return res
}

console.log(lastDigit(str1, str2))