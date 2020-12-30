require_relative '../spec/spec_helper.rb'
require_relative './reverse_palindrome.rb'

describe 'reverse palindrome' do
  test = Solution.new

  it 'recognizes a palindrome with no special characters' do
    expect(test.reverse('racecar')).to eq(true)
  end

  it 'recognizes a non-palindrome with no special characters' do
    expect(test.reverse('dog')).to eq(false)
  end

  it 'recognizes a palindrome with special characters' do
    expect(test.reverse('a man, a plan, a canal: panama')).to eq(true)
  end

  it 'recognizes a palindrome with special characters and correctly ignores case' do
    expect(test.reverse('A man, a plan, a canal: Panama')).to eq(true)
  end

  it 'recognizes a non-palindrome with special characters' do
    expect(test.reverse('race a car')).to eq(false)
  end

  it 'recognizes an empty string as a palindrome' do
    expect(test.reverse('  ')).to eq(true)
  end

  it 'recognizes underscores as special characters too!' do
    expect(test.reverse('ab_a')).to eq(true)
  end

end
