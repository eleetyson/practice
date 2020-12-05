const matchSubstrings = require('./matchedSubstrings')

test('takes two strings and returns all matching substrings', () => {
  const str1 = 'te'
  const str2 = 'test'
  expect(matchSubstrings(str1, str2)).toEqual(['t', 'te', 'e'])
})

test('order of strings passed should not matter', () => {
  const str1 = 'test'
  const str2 = 'te'
  expect(matchSubstrings(str1, str2)).toEqual(['t', 'te', 'e'])
})

test('returns case-insensitive matches', () => {
  const str1 = 'TE'
  const str2 = 'test'
  expect(matchSubstrings(str1, str2)).toEqual(['t', 'te', 'e'])
})

test('returns false when given strings with no matching substrings', () => {
  const str1 = 'no'
  const str2 = 'match'
  expect(matchSubstrings(str1, str2)).toBe(false)
})
