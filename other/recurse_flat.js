const arr = [[1, [2, 3, [4, 5], 6], 7, [8, 9], 10], 11, 12, 13, [14, 15, 16, 17, 18], 19, 20]

function flat(arr) {
  let res = []
  arr.forEach(item => {
    if (!Array.isArray(item)) {
      res.push(item)
    } else {
      res = [...res, ...flat(item)]
    }
  })
  return res
}

console.log(flat(arr))