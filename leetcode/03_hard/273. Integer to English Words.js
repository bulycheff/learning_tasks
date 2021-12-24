const numberToWords = function (num) {

  if (num === 0) return 'Zero'

  const threeDigNumToWords = num => {

    if (num < 0 || num > 999) return console.log(`Input number must be from one to three digits`)
    if (num === 0) return ''

    let arr = [0, 0, 0], i = 2

    while (num > 0) {

      arr[i] = num % 10
      i--
      num = Math.floor(num / 10)

    }

    const numObj = {

      0: '',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
      100: 'one hundred',
      200: 'two hundred',
      300: 'three hundred',
      400: 'four hundred',
      500: 'five hundred',
      600: 'six hundred',
      700: 'seven hundred',
      800: 'eight hundred',
      900: 'nine hundred',

    }

    let wordArr = []

    let twoDigNum = arr[1] * 10 + arr[2]

    if (twoDigNum < 20) {
      wordArr.unshift(numObj[twoDigNum])
      wordArr.unshift(numObj[arr[0] * 100])

    } else {
      arr.forEach((num, idx) => wordArr.push(numObj[num * Math.pow(10, 3 - idx - 1)]))

    }

    return wordArr.filter(word => word !== '').join(' ')

  }

  const numOrder = { 0: '', 1: 'thousand', 2: 'million', 3: 'billion', 4: 'trillion' }

  let arr = [], i = 1

  while (num > 0) {

    arr.push((num % 1000))
    num = Math.floor(num / 1000)

  }

  let res = []

  arr.forEach((threeDigNum, idx) => {

    if (threeDigNum > 0) {
      res.unshift(`${threeDigNumToWords(threeDigNum)} ${numOrder[idx]}`)
    }
  })

  return res.join(' ').trim().split(' ').map(word => word.split('').map((l, idx) => idx > 0 ? l : l.toUpperCase()).join('')).join(' ')

}

module.exports = { numberToWords }
