<<<<<<< HEAD
const { lengthOfLongestSubstring } = require('./leetcode/02_medium/003. Longest Substring Without Repeating Characters')
=======
const { lengthOfLongestSubstring } = require('./leetcode/02_medium/0003. Longest Substring Without Repeating Characters')
>>>>>>> dev

describe('longest ss wo repeating ch', () => {

  test('main testing', () => {

    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    expect(lengthOfLongestSubstring('abcbbasjad')).toBe(4)

  })

})