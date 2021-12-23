// https://leetcode.com/problems/zigzag-conversion/

let s = 'PAYPALISHIRING'
const numRows = 3

console.log(convert(s, numRows))

function convert(s, numRows) {

  if (numRows === 1) return s

  let r = 0, c = 0, i = s.length, isDownDirect = true, cols = 0

  while (i > 0) {
    cols++
    if (cols % 2) {
      i -= numRows
    } else {
      i -= numRows - 2
    }
  }

  let initialArr = Array.from({ length: numRows }, () => [...Array.from({ length: cols }, () => '')])

  let arr = s.split('').reduce((acc, cur) => {

    // console.log({ r, c, cur, acc })

    if (r === numRows - 1) {
      acc[r][c] = cur
      r--
      c++
      isDownDirect = false
      return acc
    }

    if (isDownDirect) {
      acc[r][c] = cur
      r++
      return acc

    }

    if (r === 0) {
      acc[r][c] = cur
      r++
      isDownDirect = true
      return acc
    }

    if (!isDownDirect) {
      acc[r][c] = cur
      r--
      c++
      return acc

    }

  }, initialArr)

  return arr.flat(Infinity).join('')

}


