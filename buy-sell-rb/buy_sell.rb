# the daily cost of a stock is given in an array, find the most profitable days for buying and selling
# restrictions: can only buy and sell once, must buy before selling
# approaches
  # a) compare every possible pair - nested loop
  # b) break the array into chunks based off the smallest value
    # slice off chunk of array including and after its smallest value
    # compare the max and min for that chunk
    # with remaining array, find smallest val, slice off chunk, find max - min difference
    # repeat until original array is empty
    # return indices resulting in the max difference

def find_max_profit(arr)
  days = arr
  max_diff = 0
  indices = []

  until days.empty?
    minimum = days.index(days.min)
    chunk = days[minimum..-1]
    maximum = days.index(chunk.max)

    if days[maximum] - days[minimum] > max_diff
      max_diff = days[maximum] - days[minimum]
      indices = [minimum, maximum]
    end

    days = days[0...minimum]
  end

  return indices
end

# arr = [110, 695, 100, 180, 260, 150, 310, 750, 250, 200, 150, 40, 700, 550, 535]
#     # chunk = [40, 700, 550, 535] => 700 - 40 = 660
#     # chunk = [100, 180, 260, 150, 310, 750, 250, 200, 200, 150] => 750 - 100 => 650
#     # chunk = [110, 695] => 695 - 110 => 585
#     # []
