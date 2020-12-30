const reverse = require ('./reversePalindrome')

test('recognizes a palindrome with no special characters', () => {
  expect(reverse('racecar')).toBe(true)
})

test('recognizes a non-palindrome with no special characters', () => {
  expect(reverse('dog')).toBe(false)
})

test('recognizes a palindrome with special characters', () => {
  expect(reverse('a man, a plan, a canal: panama')).toBe(true)
})

test('recognizes a palindrome with special characters and correctly ignores case', () => {
  expect(reverse('A man, a plan, a canal: Panama')).toBe(true)
})

test('recognizes a non-palindrome with special characters', () => {
  expect(reverse('race a car')).toBe(false)
})

test('recognizes an empty string as a palindrome', () => {
  expect(reverse(' ')).toBe(true)
})

test('recognizes underscores as special characters too!', () => {
  expect(reverse('ab_a')).toBe(true)
})
