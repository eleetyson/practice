require_relative '../spec/spec_helper.rb'
require_relative './reverse.rb'

describe 'reverse only the alphabetical characters in a given string' do
  it 'simple string with alphabetical characters' do
    expect(reverse_only_alphabetical('ethan')).to eq('nahte')
  end

  it 'simple string with alphabetical and special characters' do
    expect(reverse_only_alphabetical('e5th@n')).to eq('n5ht@e')
  end

  it 'complex string with alphabetical and special characters' do
    expect(reverse_only_alphabetical('sea!$hells3')).to eq('sll!$ehaes3')
  end

  it 'palindrome :)' do
    expect(reverse_only_alphabetical('racecar')).to eq('racecar')
  end
end
