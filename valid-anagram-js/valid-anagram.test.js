const isAnagram = require ('./valid-anagram')

const s1 = "listene"
const s2 = "silentt"

const s3 = "listen"
const s4 = "silent"

test('returns false given non-anagrams', () => {
  expect(isAnagram(s1, s2)).toBe(false)
})

test('returns true given anagrams', () => {
  expect(isAnagram(s3, s4)).toBe(true)
})
