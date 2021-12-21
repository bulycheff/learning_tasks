// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const { romanToInt } = require('./13. Roman to Integer')

test('romanToInt', () => {

  let
    s1 = 'III',
    s2 = 'LVIII',
    s3 = 'MCMXCIV',
    s4 = ''

  expect(romanToInt(s1)).toBe(3)
  expect(romanToInt(s2)).toBe(58)
  expect(romanToInt(s3)).toBe(1994)
  expect(romanToInt(s3)).toBe(1994)
  expect(romanToInt(s4)).toBe(0)

})