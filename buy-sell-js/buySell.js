// the daily cost of a stock is given in an array, find the most profitable days for buying and selling
// restrictions: can only buy and sell once, must buy before selling
// approaches
//   a) compare every possible pair - nested loop
//   b) break the array into chunks based off the smallest value
//     slice off chunk of array including and after its smallest value
//     compare the max and min for that chunk
//     with remaining array, find smallest val, slice off chunk, find max - min difference
//     repeat until original array is empty
//     return indices resulting in the max difference

function findMaxProfit(arr) {
  let days = arr
  let max_diff = 0
  let indices = []

  while (days.length > 0) {
    let minimum = days.indexOf(Math.min(...days))
    let chunk = days.slice(minimum, days.length)
    let maximum = days.indexOf(Math.max(...chunk))

    if (days[maximum] - days[minimum] > max_diff) {
      max_diff = days[maximum] - days[minimum]
      indices = [minimum, maximum]
    }

    days = days.slice(0, minimum)
  }

  return indices
}

module.exports = findMaxProfit
