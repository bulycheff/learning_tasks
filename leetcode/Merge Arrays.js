let input = [[10, 11], [17, 22], [2, 6], [15, 18], [8, 10], [1, 3]]
let input2 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]]

function mergeArrays(inputArray) {
  return inputArray
    .sort((a, b) => a[0] - b[0])
    .reduce((acc, cur) => {
      if ((acc.length === 0) || (acc[acc.length - 1][1] < cur[0])) {
        acc.push(cur)
      }
      if ((acc[acc.length - 1][1] >= cur[0]) && ((acc[acc.length - 1][1] < cur[1]))) {
        acc[acc.length - 1][1] = cur[1]
      }
      return acc
    }, [])
}

console.log(mergeArrays(input))
console.log(mergeArrays(input2))