// given a string, return it with only the alphabetical characters reversed
function reverseOnlyAlphabetical(input_str) {
  let input = input_str.split('') // transform to array because JS strings are immutable
  let left = 0
  let right = input.length - 1

  while (left < right) {
    if (!isLetter(input[left])) {
      left += 1
    } else if (!isLetter(input[right])) {
      right -= 1
    } else { // only swap once both pointers point at letters
      let temp = input[left]
      input[left] = input[right]
      input[right] = temp

      left += 1
      right -= 1
    }
  }

  return input.join('')
}

// helper function checks whether character is a letter
function isLetter(l) {
  return (/[a-zA-Z]/).test(l)
}

module.exports = {
  reverseOnlyAlphabetical,
  isLetter
}
