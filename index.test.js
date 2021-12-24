const { lengthOfLongestSubstring } = require('./leetcode/02_medium/0003. Longest Substring Without Repeating Characters')

describe('longest ss wo repeating ch', () => {

  test('main testing', () => {

    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    expect(lengthOfLongestSubstring('abcbbasjad')).toBe(4)

  })

})