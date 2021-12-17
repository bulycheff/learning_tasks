// Given the head of a singly linked list, return true if it is a palindrome.

const isPalindrome = function (head) {
  let i = 0
  while (i < Math.ceil((head.length-1) / 2)) {
    if(head[i]!==head[head.length-i-1]) return false
    i++
  }
  return true
}

console.log(isPalindrome([1,2,1,1,2,1]))
