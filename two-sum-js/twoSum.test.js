const findCombo = require('./twoSum')

const arr1 = [2, 7, 11, 15]
const target1 = 9

const arr2 = [3, 2, 4]
const target2 = 6

const arr3 = [3, 3]
const target3 = 6

test('returns the correct indices given an array and target sum', () => {
  expect( findCombo(arr1, target1).sort((a, b) => a - b) ).toEqual([0, 1])
})

test('does not use the same number twice', () => {
  expect( findCombo(arr2, target2).sort((a, b) => a - b) ).toEqual([1, 2])
})

test('can handle an array filled with a single value', () => {
  expect( findCombo(arr3, target3).sort((a, b) => a - b) ).toEqual([0, 1])
})
