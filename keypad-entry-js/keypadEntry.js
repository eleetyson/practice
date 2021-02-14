// given a message (as a string), return the number of keystrokes require to text it on a flip phone
// spaces, asterisks, and pound signs count as 1
// 0 counts as 2
// assume other punctuation can be ignored and that casing doesn't matter
function presses(phrase) {
  const INPUTS = {
      2: 'abc',
      3: 'def',
      4: 'ghi',
      5: 'jkl',
      6: 'mno',
      7: 'pqrs',
      8: 'tuv',
      9: 'wxyz'
  }

  let counter = 0

  for (const char of phrase) {
    if (char === '0') {
      counter += 2
    } else if (char === ' ' || char === '*' || char === '#' || char === '1') {
      counter += 1
    } else {
      if (!!parseInt(char)) { // if character is a number
        let btn = Object.keys(INPUTS).find (key => key === char)
        counter += INPUTS[btn].length + 1
      } else { // only hit this if character is a letter
        let btn = Object.keys(INPUTS).find( key => INPUTS[key].includes(char.toLowerCase()) )
        counter += INPUTS[btn].indexOf(char.toLowerCase()) + 1
      }
    }
  }

  return counter
}

module.exports = presses
