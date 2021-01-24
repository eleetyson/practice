// given two strings s1 and s2, retusn whether the strings are anagrams of each other
// inputs are always lowercase
// return value of true or false
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false // strings of different lengths can't be anagrams

  let obj = {}

  for (let char of s1) {
    !obj[char] ? obj[char] = 1 : obj[char] += 1
  }

  for (let char of s2) {
    if (!obj[char]) return false
    obj[char] -= 1
  }

  return true // only hit this return given anagrams
}

module.exports = isAnagram
