class Solution
  def match(str1, str2)
    matches = []
    s1 = str1.downcase
    s2 = str2.downcase

# iterate over each substring in the first string
  # ex. given "test":
  #   first outer loop: "t", "te", "tes", "test"
  #   second outer loop: "e", "es", "est"...
# if the 2nd string doesn't include the substring and the substring isn't in the array yet, add it
    (0...s1.length).each do |i|
      (i...s1.length).each do |j|
        substring = s1[i..j]
        if s2.include?(substring) && !matches.include?(substring)
          matches << substring
        end
      end
    end

    return !matches.empty? ? matches : false
  end
end
