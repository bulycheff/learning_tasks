const input1 = [0, 0, 0, 0, 1, 0, 0, 1, 0] //2
const input2 = [0, 0, 0, 0, 0, 1, 0, 0, 0] //3


const maxDistToClosest = function (seats) {
  let count = 0

  if (seats[count] === 0) {
    while (seats[count] === 0) {
      count++
    }
  }

  let i = count, max = count
  count = 0

  for (; i < seats.length; i++) {

    if (seats[i] === 1) {
      count = 0
    } else {
      count++
      max = Math.max(max, Math.ceil(count / 2))
    }
  }

  max = seats[i - 1] === 0 ? Math.max(max, count) : max

  return max

}

console.log(maxDistToClosest(input1))