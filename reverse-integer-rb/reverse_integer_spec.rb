require_relative '../spec/spec_helper.rb'
require_relative './reverse_integer.rb'

describe 'reverse_integer' do
  test = Solution.new

  it "takes a positive integer and reverses its digits" do
    expect(test.reverse(123)).to eq(321), "expected 321"
  end

  it "takes a negative integer and reverses its digits" do
    expect(test.reverse(-123)).to eq(-321)
  end

  it "properly removes zeroes" do
    expect(test.reverse(120)).to eq(21)
  end

  it "properly reverses 0" do
    expect(test.reverse(0)).to eq(0)
  end

end
