require_relative '../spec/spec_helper.rb'
require_relative './matched_substrings.rb'

describe 'match substrings' do
  test = Solution.new

  it 'takes two strings and returns all matching substrings' do
    expect(test.match('te', 'test')).to eq ['t', 'te', 'e']
  end

  it "order of strings passed should not matter" do
    expect(test.match('test', 'te')).to eq ['t', 'te', 'e']
  end

  it "returns case-insensitive matches" do
    expect(test.match('TE', 'test')).to eq(['t', 'te', 'e'])
  end

  it "returns false when given strings with no matching substrings" do
    expect(test.match('no', 'match')).to eq false
  end


end
