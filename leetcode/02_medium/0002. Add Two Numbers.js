let l1 = [6, 4, 3], l2 = [8, 6, 4, 4, 6]

const addTwoNumbers = function (l1, l2) {
  const revArr = (arr) => {
    let l2rev = []
    for (let idx = 0; idx < arr.length; idx++) {
      l2rev[idx] = arr[arr.length-idx-1]
    }
    return l2rev
  }

  return revArr((parseInt(revArr(l1).join('')) + parseInt(revArr(l2).join(''))).toString().split('')).map(n=>parseInt(n))
}

console.log(addTwoNumbers(l1, l2))