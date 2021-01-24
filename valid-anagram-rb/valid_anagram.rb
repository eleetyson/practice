# given two strings s1 and s2, retusn whether the strings are anagrams of each other
# inputs are always lowercase
# return value of true or false

def is_anagram?(s1, s2)
  return false if s1.length != s2.length # strings of different lengths can't be anagrams

  hash1 = Hash.new(0)
  hash2 = Hash.new(0)

  s1.chars.each do |char|
    hash1[char] += 1
  end

  s2.chars.each do |char|
    hash2[char] += 1
  end

  return hash1 == hash2 # hashes are equal if they contain the exact same key-val pairs
end

# n log n complexity
# def is_anagram?(s1, s2)
#   return s1.chars.sort.join("") == s2.chars.sort.join("")
# end
