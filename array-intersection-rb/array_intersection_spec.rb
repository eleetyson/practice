require_relative '../spec/spec_helper.rb'
require_relative './array_intersection.rb'

describe 'find the intersection of two arrays' do
  arr1 = [1, 2, 2, 1, 3]
  arr2 = [2, 2, 3]

  arr3 = [1, 9, 2, 12, 10]
  arr4 = [5, 7, 13, 4]

  it 'takes 2 simple arrays and returns the intersection' do
    expect(find_intersection(arr1, arr2)).to match_array [2, 3]
  end

  it 'order of returned elements does not matter' do
    expect(find_intersection(arr1, arr2)).to match_array [3, 2]
  end

  it 'returns an empty array given 2 arrays with no intersection' do
    expect(find_intersection(arr3, arr4)).to eq []
  end
end
