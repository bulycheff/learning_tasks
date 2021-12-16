const rings = 'B0B6G0R6R0R6G9'


const countPoints = function (rings) {
  let object = {}
  for (let i = 0; i < rings.length / 2; i++) {
    if (!object.hasOwnProperty(rings[2 * i + 1])) {
      object[rings[2 * i + 1]] = []
    }
    if (object[rings[2 * i + 1]].filter(item => item === rings[2 * i]).length === 0) {
      object[rings[2 * i + 1]].push(rings[2 * i])
    }
  }
  let sum = 0
  for (let rod in object) {
    if (object[rod].length === 3) {
      sum++
    }
  }

  return sum
}

console.log(countPoints(rings))

// === === === === === === === === === === === === === === === === === === === ===

let plants = [2, 4, 1, 1, 1, 1], capacityA = 2, capacityB = 4

const minimumRefill = function (plants, capacityA, capacityB) {
  let a = capacityA
  let b = capacityB
  let n = 0
  let isAlice = true

  while (plants.length > 0) {

    if (plants.length === 1) {
      isAlice = a > b
    }

    if (isAlice) {
      if (a - plants[0] < 0) {
        a = capacityA
        n++
      }
      a = a - plants[0]
      plants.shift()

    } else {
      if (b - plants[plants.length - 1] < 0) {
        b = capacityB
        n++
      }
      b = b - plants[plants.length - 1]
      plants.pop()

    }
    isAlice = !isAlice

  }
  return n
}

console.log(minimumRefill(plants, capacityA, capacityB))