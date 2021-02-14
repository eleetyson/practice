const countPresses = require('./keypadEntry')

test('it can handle a single word', () => {
  expect(countPresses('LOL')).toEqual(9)
})

test('it can handle a sentence with spaces', () => {
  expect(countPresses('HOW R U')).toEqual(13)
})

test('it can handle numbers too', () => {
  expect(countPresses('WHERE DO U WANT 2 MEET L8R')).toEqual(47)
})

test('...and special characters', () => {
  expect(countPresses('*what up*')).toEqual(11)
})

test('casing should not matter', () => {
  expect(countPresses('*WHAT UP*')).toEqual(11)
})
