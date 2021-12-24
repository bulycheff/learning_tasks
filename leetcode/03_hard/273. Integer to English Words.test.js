const { numberToWords } = require('./0273. Integer to English Words')

describe('273. Integer to English Words', () => {

  test('273. Integer to English Words', () => {

    expect(numberToWords(0)).toBe('Zero')
    expect(numberToWords(1)).toBe('One')
    expect(numberToWords(10)).toBe('Ten')
    expect(numberToWords(15)).toBe('Fifteen')
    expect(numberToWords(45)).toBe('Forty Five')
    expect(numberToWords(100)).toBe('One Hundred')
    expect(numberToWords(109)).toBe('One Hundred Nine')
    expect(numberToWords(1000)).toBe('One Thousand')
    expect(numberToWords(1590)).toBe('One Thousand Five Hundred Ninety')
    expect(numberToWords(10000)).toBe('Ten Thousand')
    expect(numberToWords(15990)).toBe('Fifteen Thousand Nine Hundred Ninety')
    expect(numberToWords(1234567)).toBe('One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven')

  })

})