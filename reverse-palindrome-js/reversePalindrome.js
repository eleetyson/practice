// given a string, return whether it's a palindrome
// consider only alpha-numeric characters -- ignore spaces, commas, etc
// assume case doesn't matter
// assume an empty string counts as a palindrome
function reverse(str) {
  if (str.trim().length === 0) return true // check for an empty string

  const strClean = str.replace(/[\W_]/g, '').toLowerCase() // remove special characters (and underscores), also downcase string

  // ex. 'racecar'
    // i = 0 --> strClean[0] !== strClean[strClean.length - 1] ('r' and 'r')
    // i = 1 --> strClean[1] !== strClean[strClean.length - 2] ('a' and 'a')
    // i = 2 --> strClean[2] !== strClean[strClean.length - 3] ('c' and 'c')
    // i = 3 --> strClean[2] !== strClean[strClean.length - 3] ('e' and 'e')
  // only need to iterate over first half of the string
  for (let i = 0; i < Math.floor(strClean.length / 2); i++) {
    if (strClean[i] !== strClean[strClean.length - i - 1]) return false
  }

  return true // only hit this return with valid palindromes
}

module.exports = reverse
