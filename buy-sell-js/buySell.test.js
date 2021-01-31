const findMaxProfit = require('./buySell.js')

const arr1 = [110, 695, 100, 180, 260, 150, 310, 750, 250, 200, 150, 40, 700, 550, 535]
const arr2 = [110, 100, 100, 535]
const arr3 = [500, 400, 400]

test('returns max profit given a normal array', () => {
  expect(findMaxProfit(arr1)).toEqual([11, 12])
})

test('returns max profit given array with duplicate prices', () => {
  try {
    expect(findMaxProfit(arr2)).toEqual([2, 3])
  } catch {
    expect(findMaxProfit(arr2)).toEqual([1, 3])
  }
})

test('return empty array when profitable trade is impossible', () => {
  expect(findMaxProfit(arr3)).toEqual([])
})
