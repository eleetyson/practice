# given two arrays as inputs, return the intersection as an array of all shared elements
# all elements in the returned array should be unique
# the elements in the returned array can be in any order
# an empty array should be returned given arrays with no shared elements
def find_intersection(arr1, arr2)
  set = Set[*arr1]
  filtered_set = Set.new( arr2.select { |x| set.include?(x) } )
  return [*filtered_set]
end

# ALTERNATIVE SOLUTION
  # intersection = {}
  #
  # arr1.each do |x|
  #   intersection[x] = 1 if !intersection.has_key?(x) && arr2.include?(x)
  # end
  #
  # return intersection.keys
