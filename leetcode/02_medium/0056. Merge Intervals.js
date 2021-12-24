let input = [[1,3],[2,6],[8,10],[15,18]]

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
