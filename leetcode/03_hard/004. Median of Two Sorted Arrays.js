// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

let arr1 = [1, 3, 4, 5, 9, 10], arr2 = [2, 7]

const findMedianSortedArrays = function (nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b)

  return arr.length % 2 === 0
    ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    : arr[Math.floor(arr.length / 2)]
}

console.log(findMedianSortedArrays(arr1, arr2))

