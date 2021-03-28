const { reverseOnlyAlphabetical, isLetter } = require('./reverse')

test('reverses a simple string with alphabetical characters', () => {
  expect(reverseOnlyAlphabetical('ethan')).toEqual('nahte')
})

test('reverses a simple string with alphabetical and special characters', () => {
  expect(reverseOnlyAlphabetical('e5th@n')).toEqual('n5ht@e')
})

test('reverses a complex string with alphabetical and special characters', () => {
  expect(reverseOnlyAlphabetical('sea!$hells3')).toEqual('sll!$ehaes3')
})

test('reverses a palindrome :)', () => {
  expect(reverseOnlyAlphabetical('racecar')).toEqual('racecar')
})
