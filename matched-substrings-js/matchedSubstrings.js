// given two strings, return all matching substrings between them (or false if no matches)
// assume case doesn't matter
function matchSubstrings(str1, str2) {
  const substrings = []
  const s1 = str1.toLowerCase()
  const s2 = str2.toLowerCase()

  // iterate over each substring in the 1st string
  // if the 2nd string doesn't include the substring and the substring isn't in the array yet, add it
  for (let i = 0; i < str1.length; i++) {
    for (let j = i + 1; j <= str1.length; j++) {
      let substr = s1.slice(i, j)
      if (s2.includes(substr) && !substrings.includes(substr)) {
        substrings.push(substr)
      }
    }
  }

  return substrings.length !== 0 ? substrings : false
}

module.exports = matchSubstrings
