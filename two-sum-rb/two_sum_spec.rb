require_relative '../spec/spec_helper.rb'
require_relative './two_sum.rb'

describe 'find combination' do
  arr1 = [2, 7, 11, 15]
  target1 = 9

  arr2 = [3, 2, 4]
  target2 = 6

  arr3 = [3, 3]
  target3 = 6

  test = Solution.new

  it 'returns the correct indices given an array and target sum' do
    expect(test.find_combo(arr1, target1)).to match_array([0, 1])
  end

  it 'does not use the same number twice' do
    expect(test.find_combo(arr2, target2)).to match_array([1, 2])
  end

  it 'can handle an array filled with a single value' do
    expect(test.find_combo(arr3, target3)).to match_array([0, 1])
  end
end
