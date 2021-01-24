require_relative '../spec/spec_helper.rb'
require_relative './valid_anagram.rb'

describe 'check for anagrams' do
  s1 = "listene"
  s2 = "silentt"

  s3 = "listen"
  s4 = "silent"

  it 'returns false given non-anagrams' do
    expect(is_anagram?(s1, s2)).to eq(false)
  end

  it 'returns true given anagrams' do
    expect(is_anagram?(s3, s4)).to eq(true)
  end
end
