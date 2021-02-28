require_relative '../spec/spec_helper.rb'
require_relative './majority_element.rb'

describe 'find the majority element' do
  basic_arr = [4, 2, 4]
  longer_arr = [1, 2, 2, 2, 8, 3, 2]
  single_element_arr = [5]

  it 'properly parses a basic array' do
    expect(find_majority_element(basic_arr)).to eq(4)
  end

  it 'properly parses a longer array' do
    expect(find_majority_element(longer_arr)).to eq(2)
  end

  it 'properly parses an array with a single element' do
    expect(find_majority_element(single_element_arr)).to eq(5)
  end
end
