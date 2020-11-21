const reverse = require('./reverseInteger')

test('takes a positive integer and reverses its digits', () => {
  expect(reverse(123)).toBe(321)
})

test('takes a negative integer and reverses its digits', () => {
  expect(reverse(-123)).toBe(-321)
})

test('properly removes zeroes', () => {
  expect(reverse(120)).toBe(21)
})

test('returns 0 if given 0', () => {
  expect(reverse(0)).toBe(0)
})
