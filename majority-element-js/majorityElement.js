// given an array of numbers, return the majority element
// the majority element is a value that makes up more than half of the array's elements
// assume that the given array will always have a majority element
// also assume that the array length is always at least one element
  // O(n) time & space complexity
function findMajorityElement(nums) {
  let counts = {}
  let mostCommonNum = 0
  let mostCommonNumCount = 0

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]

    counts[current] ? counts[current]++ : counts[current] = 1

    if (counts[current] > mostCommonNumCount) {
      mostCommonNum = current
      mostCommonNumCount = counts[current]
    }
  }

  return mostCommonNum
}

module.exports = findMajorityElement
