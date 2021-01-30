require_relative '../spec/spec_helper.rb'
require_relative './buy_sell.rb'

describe 'find max profit' do
  arr1 = [110, 695, 100, 180, 260, 150, 310, 750, 250, 200, 150, 40, 700, 550, 535]
  arr2 = [110, 100, 100, 535]
  arr3 = [500, 400, 400]

  it 'returns max profit given a normal array' do
    expect(find_max_profit(arr1)).to eq [11, 12]
  end

  it 'returns max profit given array with duplicate prices' do
    expect(find_max_profit(arr2)).to eq([2, 3]).or eq([1, 3])
  end

  it 'return empty array when profitable trade is impossible' do
    expect(find_max_profit(arr3)).to eq []
  end

end
