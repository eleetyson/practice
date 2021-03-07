# given an array of numbers, return the majority element
# the majority element is a value that makes up more than half of the array's elements
# assume that the given array will always have a majority element
# also assume that the array length is always at least one element
def find_majority_element(nums)
  counts = {}

  nums.each do |num|
    counts[num] ? counts[num] += 1 : counts[num] = 1
  end

  return counts.key(counts.values.max)

  
end
