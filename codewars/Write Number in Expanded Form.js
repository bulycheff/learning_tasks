// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

let num = 10500

function expandedForm(num) {
  // Your code here
  let k = Math.floor(Math.log10(num))
  let str = '', arr = []
  let m

  for (let i = 1; i <= Math.pow(10, k); i = i * 10) {
    m = Math.floor(num / i)
    arr.unshift((m % 10) * i)
  }

  arr = arr.filter(n => n > 0)
  arr.forEach((n, idx) => {
    if (idx > 0) {
      str += ` + `
    }
    str += n
  })

  return str

}

console.log(expandedForm(num))



