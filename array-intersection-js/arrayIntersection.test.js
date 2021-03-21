const findIntersection = require('./arrayIntersection')

const arr1 = [1, 2, 2, 1, 3]
const arr2 = [2, 2, 3]

const arr3 = [1, 9, 2, 12, 10]
const arr4 = [5, 7, 13, 4]

test('takes 2 simple arrays and returns the intersection', () => {
  expect(findIntersection(arr1, arr2).sort()).toEqual(([2, 3]).sort())
})

test('order of returned elements does not matter', () => {
  expect(findIntersection(arr1, arr2).sort()).toEqual(([3, 2]).sort())
})

test('returns an empty array given 2 arrays with no intersection', () => {
  expect(findIntersection(arr3, arr4).sort()).toEqual([])
})
