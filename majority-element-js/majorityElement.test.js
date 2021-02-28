const findMajorityElement = require('./majorityElement')

const basicArr = [4, 2, 4]
const longerArr = [1, 2, 2, 2, 8, 3, 2]
const singleElementArr = [5]

test('properly parses a basic array', () => {
  expect(findMajorityElement(basicArr)).toBe(4)
})

test('properly parses a longer array', () => {
  expect(findMajorityElement(longerArr)).toBe(2)
})

test('properly parses an array with a single element', () => {
  expect(findMajorityElement(singleElementArr)).toBe(5)
})
