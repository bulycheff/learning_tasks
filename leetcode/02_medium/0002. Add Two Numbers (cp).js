let l1 = [2,4,3], l2 = [5,6,4]

// let maxL
// if (l1.length > l2.length) {
//   maxL = l1.length
// } else {
//   maxL = l2.length
// }

let maxL = l1.length > l2.length ? l1.length : l2.length

let resArr = [], n1, n2, n, n0 = 0
for (let i = 0; i < maxL; i++) {
  n1 = l1[i] ?? 0
  n2 = l2[i] ?? 0
  n = (n1 + n2 + n0) % 10
  n0 = (n1 + n2 + n0) >= 10 ? 1 : 0
  resArr.push(n)
}

if(n0>0) {
  resArr.push(n0)
}

console.log(resArr)