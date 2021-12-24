const { lengthOfLongestSubstring } = require('./leetcode/003. Longest Substring Without Repeating Characters')

describe('longest ss wo repeating ch', () => {

  test('main testing', () => {

    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    expect(lengthOfLongestSubstring('abcbbasjad')).toBe(4)

  })

})