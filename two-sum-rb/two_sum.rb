# given an array of integers and target sum, return the indices of the two integers that add up to the target sum
# assume there is only one correct combination and you can't use the same number twice
class Solution
  def find_combo(nums, target)
    nums.each_with_index do |num, index|
      if nums.index(target - num) && nums.index(target - num) != index
        return [index, nums.index(target - num)]
      end
    end
  end

end
