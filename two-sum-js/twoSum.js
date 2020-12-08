// given an array of integers and target sum, return the indices of the two integers that add up to the target sum
// assume there is only one correct combination and you can't use the same number twice
function findCombo(nums, target) {
  let check

  for (let i = 0; i < nums.length; i++) {
    check = nums.findIndex(num => num === target - nums[i])
    if (check !== -1 && check !== i) {
      return [i, check]
    }
  }

}

module.exports = findCombo
