# given a string, return whether it's a palindrome
# consider only alpha-numeric characters -- ignore spaces, commas, etc
# assume case doesn't matter
# assume an empty string counts as a palindrome
class Solution
  def reverse(str)
    return true if str.delete(' ').length == 0 # check for an empty string

    # downcase and keep only alpha-numeric characters in subsequent array
    strClean = str.downcase.scan(/[a-z0-9]/)

    # ex. 'racecar'
      # i = 0 --> strClean[i] != strClean[-i - 1] ('r', 'r')
      # i = 1 --> strClean[i] != strClean[-i - 1] ('a', 'a')
      # i = 2 --> strClean[i] != strClean[-i - 1] ('c', 'c')
      # i = 3 --> strClean[i] != strClean[-i - 1] ('e', 'e')
    # only need to iterate over first half of the string
    0.upto( (strClean.length / 2).floor ) do |i|
      return false if strClean[i] != strClean[-i - 1]
    end

    return true # only hit this if given valid palindrome
  end

end
